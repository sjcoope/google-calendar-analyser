import { EventDataItem } from '../data/event-data';
import { CalendarEventMock } from './google-calendar-event-mock';

export class CalendarMock implements GoogleAppsScript.Calendar.Calendar {
  eventDataset: Array<EventDataItem>;

  constructor(eventDataset: Array<EventDataItem>) {
    this.eventDataset = eventDataset;
  }

  createAllDayEvent(
    title: string,
    date: GoogleAppsScript.Base.Date
  ): GoogleAppsScript.Calendar.CalendarEvent;
  createAllDayEvent(
    title: string,
    startDate: GoogleAppsScript.Base.Date,
    endDate: GoogleAppsScript.Base.Date
  ): GoogleAppsScript.Calendar.CalendarEvent;
  createAllDayEvent(
    title: string,
    startDate: GoogleAppsScript.Base.Date,
    endDate: GoogleAppsScript.Base.Date,
    options: { [key: string]: any }
  ): GoogleAppsScript.Calendar.CalendarEvent;
  createAllDayEvent(
    title: string,
    date: GoogleAppsScript.Base.Date,
    options: { [key: string]: any }
  ): GoogleAppsScript.Calendar.CalendarEvent;
  createAllDayEvent(
    title: any,
    startDate: any,
    endDate?: any,
    options?: any
  ): GoogleAppsScript.Calendar.CalendarEvent {
    throw new Error('Method not implemented.');
  }
  createAllDayEventSeries(
    title: string,
    startDate: GoogleAppsScript.Base.Date,
    recurrence: GoogleAppsScript.Calendar.EventRecurrence
  ): GoogleAppsScript.Calendar.CalendarEventSeries;
  createAllDayEventSeries(
    title: string,
    startDate: GoogleAppsScript.Base.Date,
    recurrence: GoogleAppsScript.Calendar.EventRecurrence,
    options: { [key: string]: any }
  ): GoogleAppsScript.Calendar.CalendarEventSeries;
  createAllDayEventSeries(
    title: any,
    startDate: any,
    recurrence: any,
    options?: any
  ): GoogleAppsScript.Calendar.CalendarEventSeries {
    throw new Error('Method not implemented.');
  }
  createEvent(
    title: string,
    startTime: GoogleAppsScript.Base.Date,
    endTime: GoogleAppsScript.Base.Date
  ): GoogleAppsScript.Calendar.CalendarEvent;
  createEvent(
    title: string,
    startTime: GoogleAppsScript.Base.Date,
    endTime: GoogleAppsScript.Base.Date,
    options: { [key: string]: any }
  ): GoogleAppsScript.Calendar.CalendarEvent;
  createEvent(
    title: any,
    startTime: any,
    endTime: any,
    options?: any
  ): GoogleAppsScript.Calendar.CalendarEvent {
    throw new Error('Method not implemented.');
  }
  createEventFromDescription(description: string): GoogleAppsScript.Calendar.CalendarEvent {
    throw new Error('Method not implemented.');
  }
  createEventSeries(
    title: string,
    startTime: GoogleAppsScript.Base.Date,
    endTime: GoogleAppsScript.Base.Date,
    recurrence: GoogleAppsScript.Calendar.EventRecurrence
  ): GoogleAppsScript.Calendar.CalendarEventSeries;
  createEventSeries(
    title: string,
    startTime: GoogleAppsScript.Base.Date,
    endTime: GoogleAppsScript.Base.Date,
    recurrence: GoogleAppsScript.Calendar.EventRecurrence,
    options: { [key: string]: any }
  ): GoogleAppsScript.Calendar.CalendarEventSeries;
  createEventSeries(
    title: any,
    startTime: any,
    endTime: any,
    recurrence: any,
    options?: any
  ): GoogleAppsScript.Calendar.CalendarEventSeries {
    throw new Error('Method not implemented.');
  }
  deleteCalendar(): void {
    throw new Error('Method not implemented.');
  }
  getColor(): string {
    throw new Error('Method not implemented.');
  }
  getDescription(): string {
    throw new Error('Method not implemented.');
  }
  getEventById(iCalId: string): GoogleAppsScript.Calendar.CalendarEvent {
    throw new Error('Method not implemented.');
  }
  getEventSeriesById(iCalId: string): GoogleAppsScript.Calendar.CalendarEventSeries {
    throw new Error('Method not implemented.');
  }
  getEvents(
    startTime: GoogleAppsScript.Base.Date,
    endTime: GoogleAppsScript.Base.Date
  ): GoogleAppsScript.Calendar.CalendarEvent[];
  getEvents(
    startTime: GoogleAppsScript.Base.Date,
    endTime: GoogleAppsScript.Base.Date,
    options: { [key: string]: any }
  ): GoogleAppsScript.Calendar.CalendarEvent[];
  getEvents(
    startTime: any,
    endTime: any,
    options?: any
  ): GoogleAppsScript.Calendar.CalendarEvent[] {
    var events = new Array<CalendarEventMock>();
    for (var i = 0; i < this.eventDataset.length; i++) {
      var event = this.eventDataset[i];

      // Test event is within date range
      var eventStartTime = new Date(event.startDate);
      if (
        startTime &&
        endTime &&
        eventStartTime &&
        (eventStartTime < startTime || eventStartTime > endTime)
      ) {
        continue; // Skip this iteration
      }

      if (event.startDate)
        events.push(
          new CalendarEventMock(
            event.title,
            event.endDate,
            event.startDate,
            event.guests,
            event.creators,
            event.myStatus,
            event.isRecurring,
            event.location,
            event.color,
            event.isAllDayEvent
          )
        );
    }

    return events;
  }
  getEventsForDay(date: GoogleAppsScript.Base.Date): GoogleAppsScript.Calendar.CalendarEvent[];
  getEventsForDay(
    date: GoogleAppsScript.Base.Date,
    options: { [key: string]: any }
  ): GoogleAppsScript.Calendar.CalendarEvent[];
  getEventsForDay(date: any, options?: any): GoogleAppsScript.Calendar.CalendarEvent[] {
    throw new Error('Method not implemented.');
  }
  getId(): string {
    throw new Error('Method not implemented.');
  }
  getName(): string {
    throw new Error('Method not implemented.');
  }
  getTimeZone(): string {
    throw new Error('Method not implemented.');
  }
  isHidden(): boolean {
    throw new Error('Method not implemented.');
  }
  isMyPrimaryCalendar(): boolean {
    throw new Error('Method not implemented.');
  }
  isOwnedByMe(): boolean {
    throw new Error('Method not implemented.');
  }
  isSelected(): boolean {
    throw new Error('Method not implemented.');
  }
  setColor(color: string): GoogleAppsScript.Calendar.Calendar {
    throw new Error('Method not implemented.');
  }
  setDescription(description: string): GoogleAppsScript.Calendar.Calendar {
    throw new Error('Method not implemented.');
  }
  setHidden(hidden: boolean): GoogleAppsScript.Calendar.Calendar {
    throw new Error('Method not implemented.');
  }
  setName(name: string): GoogleAppsScript.Calendar.Calendar {
    throw new Error('Method not implemented.');
  }
  setSelected(selected: boolean): GoogleAppsScript.Calendar.Calendar {
    throw new Error('Method not implemented.');
  }
  setTimeZone(timeZone: string): GoogleAppsScript.Calendar.Calendar {
    throw new Error('Method not implemented.');
  }
  unsubscribeFromCalendar(): void {
    throw new Error('Method not implemented.');
  }
}
