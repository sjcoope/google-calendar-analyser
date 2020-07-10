import { Convertor } from './shared/common';
import { initContext, getContext, _appContext, AppContext } from './shared/application-context';
import { Context } from 'mocha';

var context: Context;

function onOpen(e) {
  let ui = SpreadsheetApp.getUi();
  let menu = ui.createAddonMenu();
  menu.addItem('Create Settings Sheet', 'createSettingsSheet');
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
  this.context = new AppContext(SpreadsheetApp.getActive());
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
