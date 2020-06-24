export class SpreadsheetMock implements GoogleAppsScript.Spreadsheet.Spreadsheet {
  addDeveloperMetadata(key: string): GoogleAppsScript.Spreadsheet.Spreadsheet;
  addDeveloperMetadata(
    key: string,
    visibility: GoogleAppsScript.Spreadsheet.DeveloperMetadataVisibility
  ): GoogleAppsScript.Spreadsheet.Spreadsheet;
  addDeveloperMetadata(key: string, value: string): GoogleAppsScript.Spreadsheet.Spreadsheet;
  addDeveloperMetadata(
    key: string,
    value: string,
    visibility: GoogleAppsScript.Spreadsheet.DeveloperMetadataVisibility
  ): GoogleAppsScript.Spreadsheet.Spreadsheet;
  addDeveloperMetadata(
    key: any,
    value?: any,
    visibility?: any
  ): GoogleAppsScript.Spreadsheet.Spreadsheet {
    throw new Error('Method not implemented.');
  }
  addEditor(emailAddress: string): GoogleAppsScript.Spreadsheet.Spreadsheet;
  addEditor(user: GoogleAppsScript.Base.User): GoogleAppsScript.Spreadsheet.Spreadsheet;
  addEditor(user: any): GoogleAppsScript.Spreadsheet.Spreadsheet {
    throw new Error('Method not implemented.');
  }
  addEditors(emailAddresses: string[]): GoogleAppsScript.Spreadsheet.Spreadsheet {
    throw new Error('Method not implemented.');
  }
  addMenu(name: string, subMenus: { name: string; functionName: string }[]): void {
    throw new Error('Method not implemented.');
  }
  addViewer(emailAddress: string): GoogleAppsScript.Spreadsheet.Spreadsheet;
  addViewer(user: GoogleAppsScript.Base.User): GoogleAppsScript.Spreadsheet.Spreadsheet;
  addViewer(user: any): GoogleAppsScript.Spreadsheet.Spreadsheet {
    throw new Error('Method not implemented.');
  }
  addViewers(emailAddresses: string[]): GoogleAppsScript.Spreadsheet.Spreadsheet {
    throw new Error('Method not implemented.');
  }
  appendRow(rowContents: any[]): GoogleAppsScript.Spreadsheet.Sheet {
    throw new Error('Method not implemented.');
  }
  autoResizeColumn(columnPosition: number): GoogleAppsScript.Spreadsheet.Sheet {
    throw new Error('Method not implemented.');
  }
  copy(name: string): GoogleAppsScript.Spreadsheet.Spreadsheet {
    throw new Error('Method not implemented.');
  }
  createDeveloperMetadataFinder(): GoogleAppsScript.Spreadsheet.DeveloperMetadataFinder {
    throw new Error('Method not implemented.');
  }
  createTextFinder(findText: string): GoogleAppsScript.Spreadsheet.TextFinder {
    throw new Error('Method not implemented.');
  }
  deleteActiveSheet(): GoogleAppsScript.Spreadsheet.Sheet {
    throw new Error('Method not implemented.');
  }
  deleteColumn(columnPosition: number): GoogleAppsScript.Spreadsheet.Sheet {
    throw new Error('Method not implemented.');
  }
  deleteColumns(columnPosition: number, howMany: number): void {
    throw new Error('Method not implemented.');
  }
  deleteRow(rowPosition: number): GoogleAppsScript.Spreadsheet.Sheet {
    throw new Error('Method not implemented.');
  }
  deleteRows(rowPosition: number, howMany: number): void {
    throw new Error('Method not implemented.');
  }
  deleteSheet(sheet: GoogleAppsScript.Spreadsheet.Sheet): void {
    throw new Error('Method not implemented.');
  }
  duplicateActiveSheet(): GoogleAppsScript.Spreadsheet.Sheet {
    throw new Error('Method not implemented.');
  }
  getActiveCell(): GoogleAppsScript.Spreadsheet.Range {
    throw new Error('Method not implemented.');
  }
  getActiveRange(): GoogleAppsScript.Spreadsheet.Range {
    throw new Error('Method not implemented.');
  }
  getActiveRangeList(): GoogleAppsScript.Spreadsheet.RangeList {
    throw new Error('Method not implemented.');
  }
  getActiveSheet(): GoogleAppsScript.Spreadsheet.Sheet {
    throw new Error('Method not implemented.');
  }
  getAs(contentType: string): GoogleAppsScript.Base.Blob {
    throw new Error('Method not implemented.');
  }
  getBandings(): GoogleAppsScript.Spreadsheet.Banding[] {
    throw new Error('Method not implemented.');
  }
  getBlob(): GoogleAppsScript.Base.Blob {
    throw new Error('Method not implemented.');
  }
  getColumnWidth(columnPosition: number): number {
    throw new Error('Method not implemented.');
  }
  getCurrentCell(): GoogleAppsScript.Spreadsheet.Range {
    throw new Error('Method not implemented.');
  }
  getDataRange(): GoogleAppsScript.Spreadsheet.Range {
    throw new Error('Method not implemented.');
  }
  getDataSourceTables(): GoogleAppsScript.Spreadsheet.DataSourceTable[] {
    throw new Error('Method not implemented.');
  }
  getDeveloperMetadata(): GoogleAppsScript.Spreadsheet.DeveloperMetadata[] {
    throw new Error('Method not implemented.');
  }
  getEditors(): GoogleAppsScript.Base.User[] {
    throw new Error('Method not implemented.');
  }
  getFormUrl(): string {
    throw new Error('Method not implemented.');
  }
  getFrozenColumns(): number {
    throw new Error('Method not implemented.');
  }
  getFrozenRows(): number {
    throw new Error('Method not implemented.');
  }
  getId(): string {
    throw new Error('Method not implemented.');
  }
  getImages(): GoogleAppsScript.Spreadsheet.OverGridImage[] {
    throw new Error('Method not implemented.');
  }
  getIterativeCalculationConvergenceThreshold(): number {
    throw new Error('Method not implemented.');
  }
  getLastColumn(): number {
    throw new Error('Method not implemented.');
  }
  getLastRow(): number {
    throw new Error('Method not implemented.');
  }
  getMaxIterativeCalculationCycles(): number {
    throw new Error('Method not implemented.');
  }
  getName(): string {
    throw new Error('Method not implemented.');
  }
  getNamedRanges(): GoogleAppsScript.Spreadsheet.NamedRange[] {
    throw new Error('Method not implemented.');
  }
  getNumSheets(): number {
    throw new Error('Method not implemented.');
  }
  getOwner(): GoogleAppsScript.Base.User {
    throw new Error('Method not implemented.');
  }
  getPredefinedSpreadsheetThemes(): GoogleAppsScript.Spreadsheet.SpreadsheetTheme[] {
    throw new Error('Method not implemented.');
  }
  getProtections(
    type: GoogleAppsScript.Spreadsheet.ProtectionType
  ): GoogleAppsScript.Spreadsheet.Protection[] {
    throw new Error('Method not implemented.');
  }
  getRange(a1Notation: string): GoogleAppsScript.Spreadsheet.Range {
    throw new Error('Method not implemented.');
  }
  getRangeByName(name: string): GoogleAppsScript.Spreadsheet.Range {
    throw new Error('Method not implemented.');
  }
  getRangeList(a1Notations: string[]): GoogleAppsScript.Spreadsheet.RangeList {
    throw new Error('Method not implemented.');
  }
  getRecalculationInterval(): GoogleAppsScript.Spreadsheet.RecalculationInterval {
    throw new Error('Method not implemented.');
  }
  getRowHeight(rowPosition: number): number {
    throw new Error('Method not implemented.');
  }
  getSelection(): GoogleAppsScript.Spreadsheet.Selection {
    throw new Error('Method not implemented.');
  }
  getSheetByName(name: string): GoogleAppsScript.Spreadsheet.Sheet {
    throw new Error('Method not implemented.');
  }
  getSheetId(): number {
    throw new Error('Method not implemented.');
  }
  getSheetName(): string {
    throw new Error('Method not implemented.');
  }
  getSheetValues(
    startRow: number,
    startColumn: number,
    numRows: number,
    numColumns: number
  ): any[][] {
    throw new Error('Method not implemented.');
  }
  getSheets(): GoogleAppsScript.Spreadsheet.Sheet[] {
    throw new Error('Method not implemented.');
  }
  getSpreadsheetLocale(): string {
    throw new Error('Method not implemented.');
  }
  getSpreadsheetTheme(): GoogleAppsScript.Spreadsheet.SpreadsheetTheme {
    throw new Error('Method not implemented.');
  }
  getSpreadsheetTimeZone(): string {
    throw new Error('Method not implemented.');
  }
  getUrl(): string {
    throw new Error('Method not implemented.');
  }
  getViewers(): GoogleAppsScript.Base.User[] {
    throw new Error('Method not implemented.');
  }
  hideColumn(column: GoogleAppsScript.Spreadsheet.Range): void {
    throw new Error('Method not implemented.');
  }
  hideRow(row: GoogleAppsScript.Spreadsheet.Range): void {
    throw new Error('Method not implemented.');
  }
  insertColumnAfter(afterPosition: number): GoogleAppsScript.Spreadsheet.Sheet {
    throw new Error('Method not implemented.');
  }
  insertColumnBefore(beforePosition: number): GoogleAppsScript.Spreadsheet.Sheet {
    throw new Error('Method not implemented.');
  }
  insertColumnsAfter(afterPosition: number, howMany: number): GoogleAppsScript.Spreadsheet.Sheet {
    throw new Error('Method not implemented.');
  }
  insertColumnsBefore(beforePosition: number, howMany: number): GoogleAppsScript.Spreadsheet.Sheet {
    throw new Error('Method not implemented.');
  }
  insertImage(
    blobSource: GoogleAppsScript.Base.BlobSource,
    column: number,
    row: number
  ): GoogleAppsScript.Spreadsheet.OverGridImage;
  insertImage(
    blobSource: GoogleAppsScript.Base.BlobSource,
    column: number,
    row: number,
    offsetX: number,
    offsetY: number
  ): GoogleAppsScript.Spreadsheet.OverGridImage;
  insertImage(url: string, column: number, row: number): GoogleAppsScript.Spreadsheet.OverGridImage;
  insertImage(
    url: string,
    column: number,
    row: number,
    offsetX: number,
    offsetY: number
  ): GoogleAppsScript.Spreadsheet.OverGridImage;
  insertImage(
    url: any,
    column: any,
    row: any,
    offsetX?: any,
    offsetY?: any
  ): GoogleAppsScript.Spreadsheet.OverGridImage {
    throw new Error('Method not implemented.');
  }
  insertRowAfter(afterPosition: number): GoogleAppsScript.Spreadsheet.Sheet {
    throw new Error('Method not implemented.');
  }
  insertRowBefore(beforePosition: number): GoogleAppsScript.Spreadsheet.Sheet {
    throw new Error('Method not implemented.');
  }
  insertRowsAfter(afterPosition: number, howMany: number): GoogleAppsScript.Spreadsheet.Sheet {
    throw new Error('Method not implemented.');
  }
  insertRowsBefore(beforePosition: number, howMany: number): GoogleAppsScript.Spreadsheet.Sheet {
    throw new Error('Method not implemented.');
  }
  insertSheet(): GoogleAppsScript.Spreadsheet.Sheet;
  insertSheet(sheetIndex: number): GoogleAppsScript.Spreadsheet.Sheet;
  insertSheet(
    sheetIndex: number,
    options: { template?: GoogleAppsScript.Spreadsheet.Sheet }
  ): GoogleAppsScript.Spreadsheet.Sheet;
  insertSheet(options: {
    template?: GoogleAppsScript.Spreadsheet.Sheet;
  }): GoogleAppsScript.Spreadsheet.Sheet;
  insertSheet(sheetName: string): GoogleAppsScript.Spreadsheet.Sheet;
  insertSheet(sheetName: string, sheetIndex: number): GoogleAppsScript.Spreadsheet.Sheet;
  insertSheet(
    sheetName: string,
    sheetIndex: number,
    options: { template?: GoogleAppsScript.Spreadsheet.Sheet }
  ): GoogleAppsScript.Spreadsheet.Sheet;
  insertSheet(
    sheetName: string,
    options: { template?: GoogleAppsScript.Spreadsheet.Sheet }
  ): GoogleAppsScript.Spreadsheet.Sheet;
  insertSheet(
    sheetName?: any,
    sheetIndex?: any,
    options?: any
  ): GoogleAppsScript.Spreadsheet.Sheet {
    throw new Error('Method not implemented.');
  }
  insertSheetWithDataSourceTable(
    spec: GoogleAppsScript.Spreadsheet.DataSourceSpec
  ): GoogleAppsScript.Spreadsheet.Sheet {
    throw new Error('Method not implemented.');
  }
  isColumnHiddenByUser(columnPosition: number): boolean {
    throw new Error('Method not implemented.');
  }
  isIterativeCalculationEnabled(): boolean {
    throw new Error('Method not implemented.');
  }
  isRowHiddenByFilter(rowPosition: number): boolean {
    throw new Error('Method not implemented.');
  }
  isRowHiddenByUser(rowPosition: number): boolean {
    throw new Error('Method not implemented.');
  }
  moveActiveSheet(pos: number): void {
    throw new Error('Method not implemented.');
  }
  moveChartToObjectSheet(
    chart: GoogleAppsScript.Spreadsheet.EmbeddedChart
  ): GoogleAppsScript.Spreadsheet.Sheet {
    throw new Error('Method not implemented.');
  }
  removeEditor(emailAddress: string): GoogleAppsScript.Spreadsheet.Spreadsheet;
  removeEditor(user: GoogleAppsScript.Base.User): GoogleAppsScript.Spreadsheet.Spreadsheet;
  removeEditor(user: any): GoogleAppsScript.Spreadsheet.Spreadsheet {
    throw new Error('Method not implemented.');
  }
  removeMenu(name: string): void {
    throw new Error('Method not implemented.');
  }
  removeNamedRange(name: string): void {
    throw new Error('Method not implemented.');
  }
  removeViewer(emailAddress: string): GoogleAppsScript.Spreadsheet.Spreadsheet;
  removeViewer(user: GoogleAppsScript.Base.User): GoogleAppsScript.Spreadsheet.Spreadsheet;
  removeViewer(user: any): GoogleAppsScript.Spreadsheet.Spreadsheet {
    throw new Error('Method not implemented.');
  }
  rename(newName: string): void {
    throw new Error('Method not implemented.');
  }
  renameActiveSheet(newName: string): void {
    throw new Error('Method not implemented.');
  }
  resetSpreadsheetTheme(): GoogleAppsScript.Spreadsheet.SpreadsheetTheme {
    throw new Error('Method not implemented.');
  }
  setActiveRange(range: GoogleAppsScript.Spreadsheet.Range): GoogleAppsScript.Spreadsheet.Range {
    throw new Error('Method not implemented.');
  }
  setActiveRangeList(
    rangeList: GoogleAppsScript.Spreadsheet.RangeList
  ): GoogleAppsScript.Spreadsheet.RangeList {
    throw new Error('Method not implemented.');
  }
  setActiveSelection(range: GoogleAppsScript.Spreadsheet.Range): GoogleAppsScript.Spreadsheet.Range;
  setActiveSelection(a1Notation: string): GoogleAppsScript.Spreadsheet.Range;
  setActiveSelection(a1Notation: any): GoogleAppsScript.Spreadsheet.Range {
    throw new Error('Method not implemented.');
  }
  setActiveSheet(sheet: GoogleAppsScript.Spreadsheet.Sheet): GoogleAppsScript.Spreadsheet.Sheet;
  setActiveSheet(
    sheet: GoogleAppsScript.Spreadsheet.Sheet,
    restoreSelection: boolean
  ): GoogleAppsScript.Spreadsheet.Sheet;
  setActiveSheet(sheet: any, restoreSelection?: any): GoogleAppsScript.Spreadsheet.Sheet {
    throw new Error('Method not implemented.');
  }
  setColumnWidth(columnPosition: number, width: number): GoogleAppsScript.Spreadsheet.Sheet {
    throw new Error('Method not implemented.');
  }
  setCurrentCell(cell: GoogleAppsScript.Spreadsheet.Range): GoogleAppsScript.Spreadsheet.Range {
    throw new Error('Method not implemented.');
  }
  setFrozenColumns(columns: number): void {
    throw new Error('Method not implemented.');
  }
  setFrozenRows(rows: number): void {
    throw new Error('Method not implemented.');
  }
  setIterativeCalculationConvergenceThreshold(
    minThreshold: number
  ): GoogleAppsScript.Spreadsheet.Spreadsheet {
    throw new Error('Method not implemented.');
  }
  setIterativeCalculationEnabled(isEnabled: boolean): GoogleAppsScript.Spreadsheet.Spreadsheet {
    throw new Error('Method not implemented.');
  }
  setMaxIterativeCalculationCycles(
    maxIterations: number
  ): GoogleAppsScript.Spreadsheet.Spreadsheet {
    throw new Error('Method not implemented.');
  }
  setNamedRange(name: string, range: GoogleAppsScript.Spreadsheet.Range): void {
    throw new Error('Method not implemented.');
  }
  setRecalculationInterval(
    recalculationInterval: GoogleAppsScript.Spreadsheet.RecalculationInterval
  ): GoogleAppsScript.Spreadsheet.Spreadsheet {
    throw new Error('Method not implemented.');
  }
  setRowHeight(rowPosition: number, height: number): GoogleAppsScript.Spreadsheet.Sheet {
    throw new Error('Method not implemented.');
  }
  setSpreadsheetLocale(locale: string): void {
    throw new Error('Method not implemented.');
  }
  setSpreadsheetTheme(
    theme: GoogleAppsScript.Spreadsheet.SpreadsheetTheme
  ): GoogleAppsScript.Spreadsheet.SpreadsheetTheme {
    throw new Error('Method not implemented.');
  }
  setSpreadsheetTimeZone(timezone: string): void {
    throw new Error('Method not implemented.');
  }
  show(userInterface: GoogleAppsScript.HTML.HtmlOutput): void {
    throw new Error('Method not implemented.');
  }
  sort(columnPosition: number): GoogleAppsScript.Spreadsheet.Sheet;
  sort(columnPosition: number, ascending: boolean): GoogleAppsScript.Spreadsheet.Sheet;
  sort(columnPosition: any, ascending?: any): GoogleAppsScript.Spreadsheet.Sheet {
    throw new Error('Method not implemented.');
  }
  toast(msg: string): void;
  toast(msg: string, title: string): void;
  toast(msg: string, title: string, timeoutSeconds: number): void;
  toast(msg: any, title?: any, timeoutSeconds?: any) {
    throw new Error('Method not implemented.');
  }
  unhideColumn(column: GoogleAppsScript.Spreadsheet.Range): void {
    throw new Error('Method not implemented.');
  }
  unhideRow(row: GoogleAppsScript.Spreadsheet.Range): void {
    throw new Error('Method not implemented.');
  }
  updateMenu(name: string, subMenus: { name: string; functionName: string }[]): void {
    throw new Error('Method not implemented.');
  }
  getSheetProtection(): GoogleAppsScript.Spreadsheet.PageProtection {
    throw new Error('Method not implemented.');
  }
  isAnonymousView(): boolean {
    throw new Error('Method not implemented.');
  }
  isAnonymousWrite(): boolean {
    throw new Error('Method not implemented.');
  }
  setAnonymousAccess(anonymousReadAllowed: boolean, anonymousWriteAllowed: boolean): void {
    throw new Error('Method not implemented.');
  }
  setSheetProtection(permissions: GoogleAppsScript.Spreadsheet.PageProtection): void {
    throw new Error('Method not implemented.');
  }
}
