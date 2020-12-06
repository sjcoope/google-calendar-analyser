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
}
