import { CalendarEvent } from './calendar-event';
import { CalendarEventFormatter } from './calendar-event-formatter';

export interface ICalendarProxy {
  getEvents(startDate: Date, endDate: Date): Array<CalendarEvent>;
}

export class CalendarProxy implements ICalendarProxy {
  private calendar: GoogleAppsScript.Calendar.Calendar;

  constructor(calendar: GoogleAppsScript.Calendar.Calendar) {
    if (!calendar) throw new Error('CalendarProxy constructor - calendar parameter is invalid');
    this.calendar = calendar;
  }

  getEvents(startDate: Date, endDate: Date): Array<CalendarEvent> {
    const results = new Array<CalendarEvent>();
    const events = this.calendar.getEvents(startDate, endDate);

    for (let i = 0; i < events.length; i++) {
      const event = events[i];
      const calendarEvent = CalendarEventFormatter.fromGoogleCalendarEvent(event);
      results.push(calendarEvent);
    }

    return results;
  }
}
