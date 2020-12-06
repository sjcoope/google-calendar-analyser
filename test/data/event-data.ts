import { start } from 'repl';
import { CalendarEvent } from '../../src/calendar/calendar-event';

export class EventDataItem {
  constructor(
    title: string,
    startDate: string,
    endDate: string,
    myStatus: string,
    guests: Array<string>,
    creators: Array<string>,
    isRecurring: boolean,
    location: string,
    color: string,
    isAllDayEvent: boolean
  ) {
    this.title = title;
    this.startDate = startDate;
    this.endDate = endDate;
    this.myStatus = myStatus;
    this.guests = guests;
    this.creators = creators;
    this.isRecurring = isRecurring;
    this.location = location;
    this.color = color;
    this.isAllDayEvent = isAllDayEvent;
  }

  title: string;
  startDate: string;
  endDate: string;
  myStatus: string;
  guests: Array<string>;
  creators: Array<string>;
  isRecurring: boolean;
  location: string;
  color: string;
  isAllDayEvent: boolean;
}

export class EventData {
  static EventDataItemDataSet1: Array<EventDataItem> = [
    new EventDataItem('Test 1', '2020-05-11T08:00', '2020-05-11T09:30', 'OWNER', [], ['test1@email.co.uk'], false, '', '', false),
    new EventDataItem('Test 2', '2020-05-11T10:00', '2020-05-11T11:00', 'OWNER', [], ['test1@email.co.uk'], false, '', '', false),
    new EventDataItem('Lunch', '2020-05-11T12:00', '2020-05-11T13:00', 'OWNER', [], ['test1@email.co.uk'], false, '', '10', false),
    new EventDataItem('Test 3', '2020-05-11T14:00', '2020-05-11T17:00', 'OWNER', [], ['test1@email.co.uk'], false, '', '2', false),
    new EventDataItem('Test 4', '2020-05-12T08:00', '2020-05-12T09:00', 'OWNER', [], ['test1@email.co.uk'], false, '', '', false),
    new EventDataItem('Test 5', '2020-05-12T08:30', '2020-05-12T09:30', 'OWNER', [], ['test1@email.co.uk'], false, '', '', false),
    new EventDataItem('Test 6', '2020-05-12T09:00', '2020-05-12T09:30', 'OWNER', [], ['test1@email.co.uk'], false, '', '', false),
    new EventDataItem('Test 7', '2020-05-12T09:30', '2020-05-12T11:00', 'OWNER', [], ['test1@email.co.uk'], false, '', '', false),
    new EventDataItem('Test 8', '2020-05-12T12:00', '2020-05-12T13:00', 'OWNER', [], ['test1@email.co.uk'], false, '', '3', false),
    new EventDataItem('Test 9', '2020-05-12T13:30', '2020-05-12T14:15', 'OWNER', [], ['test1@email.co.uk'], false, '', '', false),
    new EventDataItem('Test 10', '2020-05-14T08:00', '2020-05-14T08:45', 'OWNER', [], ['test1@email.co.uk'], false, '', '1', false),
    new EventDataItem('Test 13', '2020-05-14T11:15', '2020-05-14T12:15', 'OWNER', [], ['test1@email.co.uk'], false, '', '', false),
    new EventDataItem('Test 14', '2020-05-14T11:30', '2020-05-14T13:00', 'OWNER', [], ['test1@email.co.uk'], false, '', '', false),
    new EventDataItem(
      'Random Test Entry',
      '2020-05-14T19:30',
      '2020-05-14T20:30',
      'INVITED',
      ['test1@email.co.uk'],
      ['test2@email.co.uk'],
      false,
      '',
      '',
      false
    ),
    new EventDataItem('Test 11', '2020-05-15T00:00', '2020-05-16T00:00', 'OWNER', [], ['test1@email.co.uk'], false, '', '3', true),
    new EventDataItem('Test 12', '2020-05-15T10:00', '2020-05-15T11:00', 'OWNER', [], ['test1@email.co.uk'], false, '', '', false),
    new EventDataItem('Test 15', '2020-05-15T10:30', '2020-05-15T12:00', 'OWNER', [], ['test1@email.co.uk'], false, '', '1', false),
  ];

  public static initialiseCalendarEvent(
    startTime: Date,
    endTime: Date,
    durationInMins: number,
    isAllDayMeeting: boolean,
    title: string
  ): CalendarEvent {
    var result = new CalendarEvent();
    result.title = title;
    result.startTime = startTime;
    result.endTime = endTime;
    result.durationInMins = durationInMins;
    result.isAllDayMeeting = isAllDayMeeting;
    return result;
  }
}
