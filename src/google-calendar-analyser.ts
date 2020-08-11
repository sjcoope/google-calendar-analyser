import { Convertor, DateHelper } from './shared/common';
import { AppContext } from './shared/application-context';
import { Context } from 'mocha';
import { SettingsKeys } from './shared/settings/settings-keys';

let context: Context;

function initialise() {
  // Has to be called from a custom function due to lack of permissions
  // to run during google set-up function.
  this.context = new AppContext(SpreadsheetApp, CalendarApp);
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

  sheetsProxy.populateSheet(this.context.config.sheetNameSettings, Convertor.toMultiDimensionalArray(this.context.settings.toArray()));
}

function getCalendarData() {
  initialise();

  // TODO: Allow week ranges of data to be configurable (to max of 5 for 11 weeks of data)
  const dateRanges = DateHelper.getDateRanges(1);
  const events = context.calendarProxy.getEvents(dateRanges.startDate, dateRanges.endDate);
  const datasheetName = context.settings.get(SettingsKeys.DataSheetName);

  if (context.sheetsProxy.sheetExists(datasheetName)) {
    context.sheetsProxy.createSheet(datasheetName);
  }

  context.sheetsProxy.populateSheet(datasheetName, Convertor.toMultiDimensionalArray(events, true), context.settings.get(SettingsKeys.DataRangeName));

  // TODO - expose this via SheetsProxy (means changing to pass SpreadsheetApp to create proxy and changing all tests)
  SpreadsheetApp.flush();
}
/* eslint-enable @typescript-eslint/no-unused-vars */
