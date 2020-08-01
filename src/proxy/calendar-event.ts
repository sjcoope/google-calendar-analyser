export class CalendarEvent {
  public title: string;
  public startTime: string;
  public endTime: string;
  public durationInMins: number;
  public myStatus: string;
  public guestCount: number;
  public guests: [];
  public creators: [];
  public isRecurring: boolean;
  public location: string;
  public color: string;
  public isAllDayMeeting: boolean;
  public metadataFlowTimeForDay: string;
}
