import { CalendarEvent } from './calendar-event';

export interface ICalendarEventDecorator {
  decorate(events: Array<CalendarEvent>);
}

/*
  Calculates the actual time you're in a meeting when clashed (i.e. 1 hour meeting starts, clashed 1 hour meeting starts
    30 mins into the first meeting.  Actual time in meetings is 1.5 hours).

  Types of clashes supported:
  - Meeting no clash.
  - Meeting with clash mid way that ends after.
  - Meeting with clash mid way that ends before.
  - Meeting with clash before that ends after (totally overlapped).
  - Meeting with clash before that ends before.
  - Meeting with clash starts at same time and ends after.
  - Meeting with class starts at same time and ends before.

  - Event 1 StartTime <= Event2 StartTime && Event1.StartTime < Event2.StartTime

  - Event 1 starts before/same time as Event 2 and ends before (partial clash)
  - Event 1 starts before/same time as Event 2 and ends at same time/after = (total clash)


  TODO:
  - Events must be in order of Start Time ascending (to verify at start??).
  - What about when there are multiple clashes??
  - Could I create a calculator class to make it more readable/easier to work with?
*/
export class ActualTimeCalendarEventDecorator implements ICalendarEventDecorator {
  decorate(events: CalendarEvent[]): void {
    // Needs events to be sorted on earliest starttime and latest endtime
    const sortedEvents: CalendarEvent[] = events.sort((a, b) => {
      if (a.startTime.getTime() !== b.startTime.getTime()) {
        return a.startTime.getTime() - b.startTime.getTime();
      } else {
        return b.endTime.getTime() - a.endTime.getTime();
      }
    });

    let previousEvent: CalendarEvent;
    let actualTime: number;
    sortedEvents.forEach((currentEvent) => {
      actualTime = 0;
      if (!previousEvent) actualTime = currentEvent.durationInMins;
      else {
        if (previousEvent.endTime <= currentEvent.startTime) {
          // No clash
          actualTime = currentEvent.durationInMins;
        } else {
          // Clash exists - test for which type of clash
          if (previousEvent.startTime <= currentEvent.startTime && previousEvent.endTime >= currentEvent.endTime) {
            // Full Clash - current event is fully clashed with the previous meeting
            actualTime = 0;
          } else {
            // Partial Clash - current event must end after previous event.
            actualTime = (currentEvent.endTime.getTime() - previousEvent.endTime.getTime()) / (1000 * 60);
          }
        }
      }

      currentEvent.actualDurationInMins = actualTime;

      // Only upate previousEvent if not a full clash (to capture case where first meeting covers multiple subsequent meetings)
      if (actualTime != 0) previousEvent = currentEvent;
    });
  }
}
