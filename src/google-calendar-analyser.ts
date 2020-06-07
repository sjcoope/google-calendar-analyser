import { initAppContext, getContext } from './shared/application-context';

function onOpen(e) {
  let ui = SpreadsheetApp.getUi();
  let menu = ui.createAddonMenu();
  menu.addItem('Create Settings Sheet', 'createSettingsSheet');
  menu.addItem('Help', 'showHelpDialog');
  menu.addToUi();

  initAppContext(SpreadsheetApp);
  Logger.log('Started google-calendar-analyser');
}

function onInstall(e) {
  onOpen(e);
}

function showHelpDialog() {
  let ui = SpreadsheetApp.getUi();
  let html = HtmlService.createHtmlOutputFromFile('files/help-dialog');
  html.setTitle('Google Calendar Analyser - Help');
  ui.showSidebar(html);
}

function createSettingsSheet() {}
