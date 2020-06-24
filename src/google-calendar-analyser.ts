import { Convertor } from './shared/common';
import { initContext, getContext, _appContext } from './shared/application-context';

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

function showHelpDialog() {
  let ui = SpreadsheetApp.getUi();
  let html = HtmlService.createHtmlOutputFromFile('files/help_dialog');
  html.setTitle('Google Calendar Analyser - Help');
  ui.showSidebar(html);
}

function createSettingsSheet() {
  initContext(SpreadsheetApp.getActive());
  let sheetsProxy = getContext().sheetsProxy;
  sheetsProxy.createSheet(getContext().config.sheetNameSettings);

  sheetsProxy.populateSheet(
    getContext().config.sheetNameSettings,
    Convertor.toMultiDimensionalArray(getContext().settings.toArray())
  );
}
