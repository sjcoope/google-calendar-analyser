import { CalendarEventFormatter } from '../../src/proxy/calendar-event-formatter';
import { expect } from 'chai';
import { CalendarEvent } from '../../src/proxy/calendar-event';
import { mock, when, instance } from 'ts-mockito';

/*  Issue #1 = Cannot test myStatus as this refers to GoogleAppsScript.Calendar.GuestStatus which I can't reference as the
    GoogleAppsScript typing is global and hence not 'importable' into this test. I've tried defining my own types that declare
    modules that can be imported but can't seem to get it to work. Also tried overriding global in mocha test but had issues
    matching types. Have spent enough time on it so deferring!
*/

describe('CalendarEventFormatter', () => {
  describe('fromGoogleCalendarEvent', () => {
    var event: CalendarEvent;

    var title = 'TestTitle1';
    var startTime = new Date('2020-05-19T09:30');
    var endTime = new Date('2020-05-19T10:30');
    var durationInMins = 60;
    var guests = ['guest1@email.com', 'guest2@email.com'];
    var creators = ['creator1', 'creator2'];
    var myStatus = 'YES';
    var isRecurring = false;
    var location = 'location';
    var color = '10';
    var isAllDayEvent = true;

    before(() => {
      // Guests
      var mockGuest1: GoogleAppsScript.Calendar.EventGuest = mock<GoogleAppsScript.Calendar.EventGuest>();
      when(mockGuest1.getEmail()).thenReturn('guest1@email.com');
      var mockGuest2: GoogleAppsScript.Calendar.EventGuest = mock<GoogleAppsScript.Calendar.EventGuest>();
      when(mockGuest2.getEmail()).thenReturn('guest2@email.com');
      var guests = new Array<GoogleAppsScript.Calendar.EventGuest>();
      guests.push(instance(mockGuest1));
      guests.push(instance(mockGuest2));

      let mockedCalendarEvent: GoogleAppsScript.Calendar.CalendarEvent = mock<GoogleAppsScript.Calendar.CalendarEvent>();
      when(mockedCalendarEvent.getTitle()).thenReturn(title);
      when(mockedCalendarEvent.getColor()).thenReturn(color);
      when(mockedCalendarEvent.getCreators()).thenReturn(creators);
      when(mockedCalendarEvent.getGuestList()).thenReturn(guests);
      when(mockedCalendarEvent.getStartTime()).thenReturn(new Date(startTime));
      when(mockedCalendarEvent.getEndTime()).thenReturn(new Date(endTime));
      when(mockedCalendarEvent.isAllDayEvent()).thenReturn(isAllDayEvent);
      when(mockedCalendarEvent.isRecurringEvent()).thenReturn(isRecurring);
      when(mockedCalendarEvent.getLocation()).thenReturn(location);

      // ISSUE: See Issue #1 in notes
      //when(mockedCalendarEvent.getMyStatus()).thenReturn(GoogleAppsScript.Calendar.GuestStatus.YES);

      const googleCalendarEvent: GoogleAppsScript.Calendar.CalendarEvent = instance(mockedCalendarEvent);
      event = CalendarEventFormatter.fromGoogleCalendarEvent(googleCalendarEvent);
    });

    it('should format color', () => {
      expect(event.color).to.equal(color);
    });

    it('should format creators', () => {
      expect(event.creators).to.eql(creators);
    });

    it('should format durationInMins', () => {
      expect(event.durationInMins).to.equal(durationInMins);
    });

    it('should format guests', () => {
      expect(event.guests).to.eql(guests);
    });

    it('should format isAllDayMeeting', () => {
      expect(event.isAllDayMeeting).to.equal(isAllDayEvent);
    });

    it('should format isRecurring', () => {
      expect(event.isRecurring).to.equal(isRecurring);
    });

    it('should format location', () => {
      expect(event.location).to.equal(location);
    });

    // ISSUE: See Issue #1 in notes.
    // it('should format myStatus', () => {
    //   expect(event.myStatus).to.equal(myStatus);
    // });

    it('should format title', () => {
      expect(event.title).to.equal(title);
    });
  });
});
