import { KeyValuePair } from '../shared/common';
import { CalendarEventColour } from './calendar-event-colour';

export class CalendarEvent {
  constructor() {
    this.metadata = new Array<KeyValuePair>();
  }

  public title: string;
  public startTime: Date;
  public endTime: Date;
  public durationInMins: number;
  public myStatus: string;
  public guests: string[];
  public creators: string[];
  public isRecurring: boolean;
  public location: string;
  public color: CalendarEventColour;
  public isAllDayMeeting: boolean;
  public metadata: Array<KeyValuePair>;

  // Basic Fluent Assertions - to help document logic around comparing CalendarEvents

  startsBefore(event: CalendarEvent): boolean {
    return this.startTime < event.startTime;
  }

  startsBeforeOrSameAs(event: CalendarEvent): boolean {
    return this.startsBefore(event) || this.startsSame(event);
  }

  startsSame(event: CalendarEvent): boolean {
    return this.startTime.getTime() == event.startTime.getTime();
  }

  startsAfter(event: CalendarEvent): boolean {
    return this.startTime > event.startTime;
  }

  endsBefore(event: CalendarEvent): boolean {
    return this.endTime < event.endTime;
  }

  endsSame(event: CalendarEvent): boolean {
    return this.endTime.getTime() == event.endTime.getTime();
  }

  endsAfter(event: CalendarEvent): boolean {
    return this.endTime > event.endTime;
  }

  endsAfterOrSame(event: CalendarEvent): boolean {
    return this.endsAfter(event) || this.endsSame(event);
  }
}
