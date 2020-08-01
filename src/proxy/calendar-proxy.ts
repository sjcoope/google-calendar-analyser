import { CalendarEvent } from './calendar-event';
import { DateHelper } from '../shared/common';

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
      var calendarEvent = new CalendarEvent();
      var startTime = new Date(event.getStartTime().toString());
      var endTime = new Date(event.getEndTime().toString());
      var guests = event.getGuestList();
      var creators = event.getCreators();

      calendarEvent.title = event.getTitle();
      calendarEvent.startTime = DateHelper.formatDate(startTime);
      calendarEvent.endTime = DateHelper.formatDate(endTime);
      calendarEvent.durationInMins = 0;
      //calendarEvent.durationInMins = Math.floor((Math.abs(endTime. - startTime.getUTCMilliseconds) / 1000) / 60);
      calendarEvent.myStatus = event.getMyStatus().toString();
      calendarEvent.guestCount = guests.length;
      calendarEvent.guests = [];
      //calendarEvent.guests = guests.join(String.fromCharCode(10));
      calendarEvent.isRecurring = event.isRecurringEvent();
      calendarEvent.location = event.getLocation();
      calendarEvent.color = event.getColor().toString();
      calendarEvent.isAllDayMeeting = event.isAllDayEvent();
      results.push(calendarEvent);
    }

    return results;
  }
}
