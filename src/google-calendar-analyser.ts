import { Settings } from './shared/settings/settings';
import { SheetsProxy } from './sheets/sheets-proxy';
import { SheetManager } from './sheets/sheet-manager';
import { Config } from './shared/config';
import { initContext, getContext } from './shared/application-context';

function onOpen(e) {
  let ui = SpreadsheetApp.getUi();
  let menu = ui.createAddonMenu();
  menu.addItem('Create Settings Sheet', 'createSettingsSheet');
  menu.addItem('Help', 'showHelpDialog');
  menu.addToUi();

  initContext(SpreadsheetApp);
  Logger.log('Started aws-pricing');
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
  let sheetManager = new SheetManager(getContext().sheetsProxy);
  sheetManager.createSheet(getContext().config.sheetNameSettings);
  sheetManager.populateSheet(
    getContext().config.sheetNameSettings,
    getContext().settings.toArray()
  );
}
