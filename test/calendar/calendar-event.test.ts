import { expect } from 'chai';
import { when } from 'ts-mockito';
import { CalendarEvent } from '../../src/calendar/calendar-event';
import { CalendarEventFormatter } from '../../src/calendar/calendar-event-formatter';

var event1 = new CalendarEvent();
event1.startTime = new Date('2020-05-11T08:30');
event1.endTime = new Date('2020-05-11T09:00');

var event2 = new CalendarEvent();
event2.startTime = new Date('2020-05-11T08:30');
event2.endTime = new Date('2020-05-11T09:00');

var event3 = new CalendarEvent();
event3.startTime = new Date('2020-05-11T08:00');
event3.endTime = new Date('2020-05-11T08:30');

var event4 = new CalendarEvent();
event4.startTime = new Date('2020-05-11T09:00');
event4.endTime = new Date('2020-05-11T09:30');

describe('CalendarEvent', () => {
  describe('startsBefore', () => {
    it('should return true when first event starts before second event', () => {
      expect(event1.startsBefore(event4)).to.be.true;
    });

    it('should return false when first event starts at same time as second event', () => {
      expect(event1.startsBefore(event2)).to.be.false;
    });

    it('should return false when first event starts after second event', () => {
      expect(event1.startsBefore(event3)).to.be.false;
    });
  });

  describe('startsAfter', () => {
    it('should return false when first event starts before second event', () => {
      expect(event1.startsAfter(event4)).to.be.false;
    });

    it('should return false when first event starts at same time as second event', () => {
      expect(event1.startsAfter(event2)).to.be.false;
    });

    it('should return true when first event starts after second event', () => {
      expect(event1.startsAfter(event3)).to.be.true;
    });
  });

  describe('startsSame', () => {
    it('should return false when first event starts before second event', () => {
      expect(event1.startsSame(event4)).to.be.false;
    });

    it('should return true when first event starts at same time as second event', () => {
      expect(event1.startsSame(event2)).to.be.true;
    });

    it('should return false when first event starts after second event', () => {
      expect(event1.startsSame(event3)).to.be.false;
    });
  });

  describe('endsBefore', () => {
    it('should return true when first event ends before second event', () => {
      expect(event1.endsBefore(event4)).to.be.true;
    });

    it('should return false when first event ends at same time as second event', () => {
      expect(event1.endsBefore(event2)).to.be.false;
    });

    it('should return false when first event ends after second event', () => {
      expect(event1.endsBefore(event3)).to.be.false;
    });
  });

  describe('endsSame', () => {
    it('should return false when first event ends before second event', () => {
      expect(event1.endsSame(event4)).to.be.false;
    });

    it('should return true when first event ends at same time as second event', () => {
      expect(event1.endsSame(event2)).to.be.true;
    });

    it('should return false when first event ends after second event', () => {
      expect(event1.endsSame(event3)).to.be.false;
    });
  });

  describe('endsAfter', () => {
    it('should return false when first event ends before second event', () => {
      expect(event1.endsAfter(event4)).to.be.false;
    });

    it('should return false when first event ends at same time as second event', () => {
      expect(event1.endsAfter(event2)).to.be.false;
    });

    it('should return true when first event ends after second event', () => {
      expect(event1.endsAfter(event3)).to.be.true;
    });
  });
});
