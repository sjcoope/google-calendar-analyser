export class CalendarEvent {
  public title: string;
  public startTime: Date;
  public endTime: Date;
  public durationInMins: number;
  public myStatus: String;
  public guests: string[];
  public creators: string[];
  public isRecurring: boolean;
  public location: string;
  public color: string;
  public isAllDayMeeting: boolean;
}
