import { EventDataItem } from '../data/event-data';
import { mock, instance, when } from 'ts-mockito';

export class CalendarEventMockFactory {
  static FromEventData(item: EventDataItem): GoogleAppsScript.Calendar.CalendarEvent {
    let mockedCalendarEvent: GoogleAppsScript.Calendar.CalendarEvent = mock<GoogleAppsScript.Calendar.CalendarEvent>();

    // Handle guests
    var guests = new Array<GoogleAppsScript.Calendar.EventGuest>();
    for (var guest in item.guests) {
      let mockGuest: GoogleAppsScript.Calendar.EventGuest = mock<GoogleAppsScript.Calendar.EventGuest>();
      when(mockGuest.getEmail()).thenReturn(guest);
      guests.push(instance(mockGuest));
    }

    when(mockedCalendarEvent.getTitle()).thenReturn(item.title);
    when(mockedCalendarEvent.getColor()).thenReturn(item.color);
    when(mockedCalendarEvent.getCreators()).thenReturn(item.creators);
    when(mockedCalendarEvent.getGuestList()).thenReturn(guests);
    when(mockedCalendarEvent.getStartTime()).thenReturn(new Date(item.startDate));
    when(mockedCalendarEvent.getEndTime()).thenReturn(new Date(item.endDate));
    when(mockedCalendarEvent.isAllDayEvent()).thenReturn(item.isAllDayEvent);
    when(mockedCalendarEvent.isRecurringEvent()).thenReturn(item.isRecurring);
    when(mockedCalendarEvent.getLocation()).thenReturn(item.location);

    return instance(mockedCalendarEvent);
  }
}
