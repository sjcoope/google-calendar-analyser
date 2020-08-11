import { CalendarEvent } from './calendar-event';

export class CalendarEventFormatter {
  // TODO: consider moving to CalendarEvent so class handles all it's own formatting.
  static fromGoogleCalendarEvent(input: GoogleAppsScript.Calendar.CalendarEvent): CalendarEvent {
    const calendarEvent = new CalendarEvent();

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
    calendarEvent.startTime = new Date(input.getStartTime().toString());
    calendarEvent.endTime = new Date(input.getEndTime().toString());
    calendarEvent.creators = input.getCreators();
    calendarEvent.durationInMins = Math.round((calendarEvent.endTime.getTime() - calendarEvent.startTime.getTime()) / 1000 / 60);
    calendarEvent.isRecurring = input.isRecurringEvent();
    calendarEvent.location = input.getLocation();
    calendarEvent.color = input.getColor().toString();
    calendarEvent.isAllDayMeeting = input.isAllDayEvent();

    return calendarEvent;
  }

  // TODO: Implement interface to test if implemented and then defer conversion to that otherwise do it manually in common.
  // static toMultiDimensionalArray(input: CalendarEvent): Array<Array<string>> {
  //   return null;
  // }
}
