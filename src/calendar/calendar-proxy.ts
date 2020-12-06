import { CalendarEvent } from './calendar-event';
import { ICalendarEventDecorator } from './calendar-event-decorator';
import { CalendarEventFormatter } from './calendar-event-formatter';

export interface ICalendarProxy {
  getEvents(startDate: Date, endDate: Date): Array<CalendarEvent>;
}

export class CalendarProxy implements ICalendarProxy {
  private calendar: GoogleAppsScript.Calendar.Calendar;
  private decorators: Array<ICalendarEventDecorator>;

  constructor(calendar: GoogleAppsScript.Calendar.Calendar, decorators?: Array<ICalendarEventDecorator>) {
    if (!calendar) throw new Error('CalendarProxy constructor - calendar parameter is invalid');
    this.calendar = calendar;

    // Decorators is optional
    if (!decorators) this.decorators = new Array<ICalendarEventDecorator>();
    else this.decorators = decorators;
  }

  getEvents(startDate: Date, endDate: Date): Array<CalendarEvent> {
    const results = new Array<CalendarEvent>();
    const events = this.calendar.getEvents(startDate, endDate);

    for (let i = 0; i < events.length; i++) {
      const event = events[i];
      const calendarEvent = CalendarEventFormatter.fromGoogleCalendarEvent(event);
      results.push(calendarEvent);
    }

    // Decorate events with any additional information
    this.decorators.forEach((decorator) => {
      decorator.decorate(results);
    });

    return results;
  }
}
