import { CalendarEvent } from './calendar-event';
import { CalendarEventFormatter } from './calendar-event-formatter';

export interface ICalendarProxy {}

export class CalendarProxy implements ICalendarProxy {
  private calendar: GoogleAppsScript.Calendar.Calendar;

  constructor(calendar: GoogleAppsScript.Calendar.Calendar) {
    if (!calendar) throw new Error('CalendarProxy constructor - calendar parameter is invalid');
    this.calendar = calendar;
  }

  getEvents(startDate: Date, endDate: Date): Array<CalendarEvent> {
    var results = new Array<CalendarEvent>();
    var events = this.calendar.getEvents(startDate, endDate);

    for (var i = 0; i < events.length; i++) {
      var event = events[i];
      var calendarEvent = CalendarEventFormatter.fromGoogleCalendarEvent(event);
      results.push(calendarEvent);
    }

    return results;
  }
}
