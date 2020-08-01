import { EventDateMock } from './google-apps-script-calendar-event-date-mock';
import { GuestStatus } from './google-apps-script-enums';
import { EventGuestMock } from './google-apps-script-calendar-event-guest-mock';

export class CalendarEventMock implements GoogleAppsScript.Calendar.CalendarEvent {
  _title: string;
  _startTime: string;
  _endTime: string;
  _guests: Array<string>;
  _creators: Array<string>;
  _myStatus: string;
  _isRecurring: boolean;
  _location: string;
  _color: string;
  _isAllDayEvent: boolean;

  constructor(
    title?: string,
    endTime?: string,
    startTime?: string,
    guests?: Array<string>,
    creators?: Array<string>,
    myStatus?: string,
    isRecurring?: boolean,
    location?: string,
    color?: string,
    isAllDayEvent?: boolean
  ) {
    this._title = title;
    this._startTime = startTime;
    this._endTime = endTime;
    this._guests = guests;
    this._creators = creators;
    this._myStatus = myStatus;
    this._isRecurring = isRecurring;
    this._location = location;
    this._color = color;
    this._isAllDayEvent = isAllDayEvent;
  }

  addEmailReminder(minutesBefore: number): GoogleAppsScript.Calendar.CalendarEvent {
    throw new Error('Method not implemented.');
  }
  addGuest(email: string): GoogleAppsScript.Calendar.CalendarEvent {
    throw new Error('Method not implemented.');
  }
  addPopupReminder(minutesBefore: number): GoogleAppsScript.Calendar.CalendarEvent {
    throw new Error('Method not implemented.');
  }
  addSmsReminder(minutesBefore: number): GoogleAppsScript.Calendar.CalendarEvent {
    throw new Error('Method not implemented.');
  }
  anyoneCanAddSelf(): boolean {
    throw new Error('Method not implemented.');
  }
  deleteEvent(): void {
    throw new Error('Method not implemented.');
  }
  deleteTag(key: string): GoogleAppsScript.Calendar.CalendarEvent {
    throw new Error('Method not implemented.');
  }
  getAllDayEndDate(): GoogleAppsScript.Base.Date {
    throw new Error('Method not implemented.');
  }
  getAllDayStartDate(): GoogleAppsScript.Base.Date {
    throw new Error('Method not implemented.');
  }
  getAllTagKeys(): string[] {
    throw new Error('Method not implemented.');
  }
  getColor(): string {
    return this._color;
  }
  getCreators(): string[] {
    return this._creators;
  }
  getDateCreated(): GoogleAppsScript.Base.Date {
    throw new Error('Method not implemented.');
  }
  getDescription(): string {
    throw new Error('Method not implemented.');
  }
  getEmailReminders(): number[] {
    throw new Error('Method not implemented.');
  }
  getEndTime(): GoogleAppsScript.Base.Date {
    return new EventDateMock(this._endTime);
  }
  getEventSeries(): GoogleAppsScript.Calendar.CalendarEventSeries {
    throw new Error('Method not implemented.');
  }
  getGuestByEmail(email: string): GoogleAppsScript.Calendar.EventGuest {
    throw new Error('Method not implemented.');
  }
  getGuestList(): GoogleAppsScript.Calendar.EventGuest[];
  getGuestList(includeOwner: boolean): GoogleAppsScript.Calendar.EventGuest[];
  getGuestList(includeOwner?: any): GoogleAppsScript.Calendar.EventGuest[] {
    var guests = new Array<GoogleAppsScript.Calendar.EventGuest>();
    for (var item in this._guests) {
      guests.push(new EventGuestMock(item));
    }
    return guests;
  }
  getId(): string {
    throw new Error('Method not implemented.');
  }
  getLastUpdated(): GoogleAppsScript.Base.Date {
    throw new Error('Method not implemented.');
  }
  getLocation(): string {
    return this._location;
  }
  getMyStatus(): GoogleAppsScript.Calendar.GuestStatus {
    return GuestStatus[this._myStatus];
  }
  getOriginalCalendarId(): string {
    throw new Error('Method not implemented.');
  }
  getPopupReminders(): number[] {
    throw new Error('Method not implemented.');
  }
  getSmsReminders(): number[] {
    throw new Error('Method not implemented.');
  }
  getStartTime(): GoogleAppsScript.Base.Date {
    return new EventDateMock(this._startTime);
  }
  getTag(key: string): string {
    throw new Error('Method not implemented.');
  }
  getTitle(): string {
    return this._title;
  }
  getVisibility(): GoogleAppsScript.Calendar.Visibility {
    throw new Error('Method not implemented.');
  }
  guestsCanInviteOthers(): boolean {
    throw new Error('Method not implemented.');
  }
  guestsCanModify(): boolean {
    throw new Error('Method not implemented.');
  }
  guestsCanSeeGuests(): boolean {
    throw new Error('Method not implemented.');
  }
  isAllDayEvent(): boolean {
    return this._isAllDayEvent;
  }
  isOwnedByMe(): boolean {
    throw new Error('Method not implemented.');
  }
  isRecurringEvent(): boolean {
    return this._isRecurring;
  }
  removeAllReminders(): GoogleAppsScript.Calendar.CalendarEvent {
    throw new Error('Method not implemented.');
  }
  removeGuest(email: string): GoogleAppsScript.Calendar.CalendarEvent {
    throw new Error('Method not implemented.');
  }
  resetRemindersToDefault(): GoogleAppsScript.Calendar.CalendarEvent {
    throw new Error('Method not implemented.');
  }
  setAllDayDate(date: GoogleAppsScript.Base.Date): GoogleAppsScript.Calendar.CalendarEvent {
    throw new Error('Method not implemented.');
  }
  setAllDayDates(
    startDate: GoogleAppsScript.Base.Date,
    endDate: GoogleAppsScript.Base.Date
  ): GoogleAppsScript.Calendar.CalendarEvent {
    throw new Error('Method not implemented.');
  }
  setAnyoneCanAddSelf(anyoneCanAddSelf: boolean): GoogleAppsScript.Calendar.CalendarEvent {
    throw new Error('Method not implemented.');
  }
  setColor(color: string): GoogleAppsScript.Calendar.CalendarEvent {
    throw new Error('Method not implemented.');
  }
  setDescription(description: string): GoogleAppsScript.Calendar.CalendarEvent {
    throw new Error('Method not implemented.');
  }
  setGuestsCanInviteOthers(
    guestsCanInviteOthers: boolean
  ): GoogleAppsScript.Calendar.CalendarEvent {
    throw new Error('Method not implemented.');
  }
  setGuestsCanModify(guestsCanModify: boolean): GoogleAppsScript.Calendar.CalendarEvent {
    throw new Error('Method not implemented.');
  }
  setGuestsCanSeeGuests(guestsCanSeeGuests: boolean): GoogleAppsScript.Calendar.CalendarEvent {
    throw new Error('Method not implemented.');
  }
  setLocation(location: string): GoogleAppsScript.Calendar.CalendarEvent {
    throw new Error('Method not implemented.');
  }
  setMyStatus(
    status: GoogleAppsScript.Calendar.GuestStatus
  ): GoogleAppsScript.Calendar.CalendarEvent {
    throw new Error('Method not implemented.');
  }
  setTag(key: string, value: string): GoogleAppsScript.Calendar.CalendarEvent {
    throw new Error('Method not implemented.');
  }
  setTime(
    startTime: GoogleAppsScript.Base.Date,
    endTime: GoogleAppsScript.Base.Date
  ): GoogleAppsScript.Calendar.CalendarEvent {
    throw new Error('Method not implemented.');
  }
  setTitle(title: string): GoogleAppsScript.Calendar.CalendarEvent {
    throw new Error('Method not implemented.');
  }
  setVisibility(
    visibility: GoogleAppsScript.Calendar.Visibility
  ): GoogleAppsScript.Calendar.CalendarEvent {
    throw new Error('Method not implemented.');
  }
}
