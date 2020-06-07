import { Settings } from './shared/settings/settings';
import { SheetsProxy } from './sheets/sheets-proxy';
import { SheetManager } from './sheets/sheet-manager';
import { Config } from './shared/config';

function onOpen(e) {
  let ui = SpreadsheetApp.getUi();
  let menu = ui.createAddonMenu();
  menu.addItem('Create Settings Sheet', 'createSettingsSheet');
  menu.addItem('Help', 'showHelpDialog');
  menu.addToUi();

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
  /* Sample code for structuring other objectives
  ------------------------------------------------*/
  var config = new Config();
  var settings = new Settings(config);
  var sheetsProxy = new SheetsProxy();

  let sheetManager = new SheetManager(sheetsProxy);
  sheetManager.createSheet(config.sheetNameSettings);
  sheetManager.populateSheet(config.sheetNameSettings, settings.toArray());
}
