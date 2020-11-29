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

  /* Types of clash to simulate.
  - Meeting no clash.
  - Meeting with clash mid way that ends after
  - Meeting with clash mid way that ends before.
  - Meeting with clash before that ends after (totally overlapped)
  - Meeting with clash before that ends before
  - Meeting with clash starts at same time and ends after
  - Meeting with class starts at same time and ends before

  */
  static CalendarEventDataset1: Array<CalendarEvent> = [
    EventData.initialiseCalendarEvent(new Date('2020-05-11T08:00'), new Date('2020-05-11T08:30'), 30, false, '1-No Clash'),
    EventData.initialiseCalendarEvent(new Date('2020-05-11T09:00'), new Date('2020-05-11T10:00'), 60, false, '2-No Clash'),
    EventData.initialiseCalendarEvent(new Date('2020-05-11T08:30'), new Date('2020-05-11T17:00'), 30, true, '3-No Clash-All Day'),
    EventData.initialiseCalendarEvent(new Date('2020-05-11T13:30'), new Date('2020-05-11T14:00'), 30, false, '4-Clash-Start Same-Finish After'),
    EventData.initialiseCalendarEvent(new Date('2020-05-11T13:30'), new Date('2020-05-11T14:30'), 60, false, '5-Clash-Start Same-Finish After'),
    EventData.initialiseCalendarEvent(new Date('2020-05-11T15:30'), new Date('2020-05-11T16:30'), 60, false, '6-'),
    EventData.initialiseCalendarEvent(new Date('2020-05-11T16:00'), new Date('2020-05-11T17:00'), 60, false, '7'),
    EventData.initialiseCalendarEvent(new Date('2020-05-12T10:00'), new Date('2020-05-12T11:30'), 90, false, '8'),
    EventData.initialiseCalendarEvent(new Date('2020-05-12T10:30'), new Date('2020-05-12T11:00'), 30, false, '9'),
    EventData.initialiseCalendarEvent(new Date('2020-05-12T10:30'), new Date('2020-05-12T11:30'), 60, false, '10'),
    EventData.initialiseCalendarEvent(new Date('2020-05-13T08:00'), new Date('2020-05-13T08:30'), 30, false, '11'),
    EventData.initialiseCalendarEvent(new Date('2020-05-13T08:00'), new Date('2020-05-13T08:30'), 30, false, '12'),
    EventData.initialiseCalendarEvent(new Date('2020-05-15T08:00'), new Date('2020-05-15T08:30'), 30, false, '13'),
    EventData.initialiseCalendarEvent(new Date('2020-05-15T08:00'), new Date('2020-05-15T08:30'), 30, false, '14'),
    EventData.initialiseCalendarEvent(new Date('2020-05-15T08:00'), new Date('2020-05-15T08:30'), 30, false, '15'),
    EventData.initialiseCalendarEvent(new Date('2020-05-15T08:00'), new Date('2020-05-15T08:30'), 30, false, '16'),
    EventData.initialiseCalendarEvent(new Date('2020-05-15T08:00'), new Date('2020-05-15T08:30'), 30, false, '17'),
    EventData.initialiseCalendarEvent(new Date('2020-05-15T08:00'), new Date('2020-05-15T08:30'), 30, false, '18'),
    EventData.initialiseCalendarEvent(new Date('2020-05-15T08:00'), new Date('2020-05-15T08:30'), 30, false, '19'),
    EventData.initialiseCalendarEvent(new Date('2020-05-15T08:00'), new Date('2020-05-15T08:30'), 30, false, '20'),
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
