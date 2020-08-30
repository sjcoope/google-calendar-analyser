import { CalendarEvent } from './calendar-event';

export class CalendarEventFormatter {
  static fromGoogleCalendarEvent(input: GoogleAppsScript.Calendar.CalendarEvent): CalendarEvent {
    const calendarEvent = new CalendarEvent();
    const startTime = new Date(input.getStartTime().toString());
    const endTime = new Date(input.getEndTime().toString());

    // Unable to mock the enum to test this property so testing value
    // to ensure tests don't fail (see Issue #1 in ReadMe).
    const myStatus = input.getMyStatus();
    if (myStatus) calendarEvent.myStatus = myStatus.toString();

    calendarEvent.guests = new Array<string>();
    const eventGuests = input.getGuestList();
    for (const eventGuest of eventGuests) {
      calendarEvent.guests.push(eventGuest.getEmail());
    }

    calendarEvent.title = input.getTitle();
    calendarEvent.startTime = startTime;
    calendarEvent.endTime = endTime;
    calendarEvent.creators = input.getCreators();
    calendarEvent.durationInMins = Math.round((endTime.getTime() - startTime.getTime()) / 1000 / 60);
    calendarEvent.isRecurring = input.isRecurringEvent();
    calendarEvent.location = input.getLocation();
    calendarEvent.color = input.getColor().toString();
    calendarEvent.isAllDayMeeting = input.isAllDayEvent();

    return calendarEvent;
  }
}
