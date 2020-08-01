import { Convertor, DateHelper } from './shared/common';
import { AppContext } from './shared/application-context';
import { Context } from 'mocha';
import { SettingsKeys } from './shared/settings/settings-keys';
import { CalendarProxy } from './proxy/calendar-proxy';

var context: Context;

function onOpen(e) {
  let ui = SpreadsheetApp.getUi();
  let menu = ui.createAddonMenu();
  menu.addItem('Create Settings Sheet', 'createSettingsSheet');
  menu.addItem('Sync Data', 'getCalendarData');
  menu.addItem('Help', 'showHelpDialog');
  menu.addToUi();
  Logger.log('Started google-calendar-analyser');
}

function onInstall(e) {
  onOpen(e);
}

function initialise() {
  // Has to be called from a custom function due to lack of permissions
  // to run during google set-up function.
  this.context = new AppContext(SpreadsheetApp.getActive(), CalendarApp);
}

function showHelpDialog() {
  let ui = SpreadsheetApp.getUi();
  let html = HtmlService.createHtmlOutputFromFile('files/help_dialog');
  html.setTitle('Google Calendar Analyser - Help');
  ui.showSidebar(html);
}

function createSettingsSheet() {
  initialise();
  let sheetsProxy = this.context.sheetsProxy;
  sheetsProxy.createSheet(this.context.config.sheetNameSettings);

  sheetsProxy.populateSheet(
    this.context.config.sheetNameSettings,
    Convertor.toMultiDimensionalArray(this.context.settings.toArray())
  );
}

function getCalendarData() {
  initialise();

  // TODO: Allow week ranges of data to be configurable (to max of 5 for 11 weeks of data)
  var dateRanges = DateHelper.getDateRanges(1);
  var events = context.calendarProxy.getEvents(dateRanges.startDate, dateRanges.endDate);
  var datasheetName = context.settings.get(SettingsKeys.DataSheetName);

  if (context.sheetsProxy.sheetExists(datasheetName)) {
    context.sheetsProxy.createSheet(datasheetName);
  }

  context.sheetsProxy.populateSheet(
    datasheetName,
    Convertor.toMultiDimensionalArray(events, true),
    context.settings.get(SettingsKeys.DataRangeName)
  );
}
