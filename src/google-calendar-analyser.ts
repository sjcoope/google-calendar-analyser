import { Convertor, DateHelper, KeyValuePair } from './shared/common';
import { AppContext } from './shared/application-context';
import { SettingsKeys } from './shared/settings/settings-keys';
import { Config } from './shared/config';
import { SheetsProxy } from './sheets/sheets-proxy';
import { Settings } from './shared/settings/settings';
import { CalendarProxy } from './calendar/calendar-proxy';
import { ActualTimeCalendarEventDecorator } from './calendar/calendar-event-decorator';

// Note: Has to be done this way as we've not initialised the AppContext yet and so can't
// call appContext.settings (and we need settings to initialise it).
function initialiseSettings(config: Config) {
  const settingsSheet = SpreadsheetApp.getActive().getSheetByName(config.sheetNameSettings);
  let settingsArray = new Array<KeyValuePair>();
  if (!settingsSheet) {
    settingsArray = config.getDefaultSettings();
  } else {
    // Read from settings sheet.
    settingsArray = Convertor.toKeyValuePairArray(
      settingsSheet.getSheetValues(
        config.sheetRangeSettings.startRow,
        config.sheetRangeSettings.startColumn,
        config.sheetRangeSettings.numRows,
        config.sheetRangeSettings.numColumns
      )
    );
  }
  return new Settings(settingsArray);
}

// Note: Has to be called from a custom function due to lack of permissions to run during google set-up function.
function initialise() {
  const config = new Config();
  const settings = initialiseSettings(config);

  this.context = new AppContext(
    new SheetsProxy(SpreadsheetApp.getActive()),
    new CalendarProxy(CalendarApp.getCalendarById(settings.get(SettingsKeys.CalendarID))),
    settings,
    config
  );
}

/* eslint-disable @typescript-eslint/no-unused-vars */
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  const menu = ui.createAddonMenu();
  menu.addItem('Create Settings Sheet', 'createSettingsSheet');
  menu.addItem('Sync Data', 'getCalendarData');
  menu.addItem('Help', 'showHelpDialog');
  menu.addToUi();
  Logger.log('Started google-calendar-analyser');
}

function showHelpDialog() {
  const ui = SpreadsheetApp.getUi();
  const html = HtmlService.createHtmlOutputFromFile('files/help_dialog');
  html.setTitle('Google Calendar Analyser - Help');
  ui.showSidebar(html);
}

function createSettingsSheet() {
  initialise();
  const sheetsProxy = this.context.sheetsProxy;
  sheetsProxy.createSheet(this.context.config.sheetNameSettings);
  sheetsProxy.populateSheet(this.context.config.sheetNameSettings, Convertor.toMultiDimensionalArray(this.context.config));
}

function getCalendarData() {
  initialise();

  // TODO: Allow week ranges of data to be configurable (to max of 5 for 11 weeks of data)
  const dateRanges = DateHelper.getDateRanges(1);
  const events = this.context.calendarProxy.getEvents(dateRanges.startDate, dateRanges.endDate);

  this.context.calendarProxy.decorateEvents(events, new ActualTimeCalendarEventDecorator());

  const datasheetName = this.context.settings.get(SettingsKeys.DataSheetName);

  if (this.context.sheetsProxy.sheetExists(datasheetName)) {
    this.context.sheetsProxy.createSheet(datasheetName);
  }

  this.context.sheetsProxy.populateSheet(
    datasheetName,
    Convertor.toMultiDimensionalArray(events, true),
    this.context.settings.get(SettingsKeys.DataRangeName)
  );

  // TODO - expose this via SheetsProxy (means changing to pass SpreadsheetApp to create proxy and changing all tests)
  SpreadsheetApp.flush();
}
/* eslint-enable @typescript-eslint/no-unused-vars */
