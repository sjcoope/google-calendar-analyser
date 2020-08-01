import { start } from 'repl';
import { CalendarEvent } from '../proxy/calendar-event';

export class KeyValuePair {
  constructor(key: string, value: string) {
    this.key = key;
    this.value = value;
  }

  key: string;
  value: string;
}

export class Convertor {
  static toMultiDimensionalArray(items: Array<any>, addTitleRow?: boolean): Array<Array<String>> {
    if (!items) {
      throw new Error('toMultiDimensionalArray: Invalid parameter');
    }

    var parentArray = new Array();
    var childArray = new Array();
    if (items.length == 0) return parentArray;

    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      childArray = new Array();
      for (var property in item) {
        if (item.hasOwnProperty(property)) {
          childArray.push(item[property]);
        }
      }
      parentArray.push(childArray);
    }

    return parentArray;
  }
}

export class DateHelper {
  static formatDate(date: Date): string {
    if (!date) throw new Error('formatDate - date parameter is invalid');

    return (
      ('0' + date.getDate()).slice(-2) +
      '/' +
      ('0' + (date.getMonth() + 1)).slice(-2) +
      '/' +
      date.getFullYear() +
      ' ' +
      ('0' + date.getHours()).slice(-2) +
      ':' +
      ('0' + date.getMinutes()).slice(-2)
    );
  }

  static getDateRanges(weeksFrom: number, date?: Date): DateRanges {
    if (weeksFrom == null || weeksFrom == undefined || isNaN(weeksFrom)) {
      throw new Error('getDateRanges - weekNumber parameter is invalid');
    }

    var currentDate = date ?? new Date();
    var startDate = DateHelper.getLastMonday(currentDate);
    var endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() - endDate.getDay() + 5);
    endDate.setHours(23, 59, 59);

    if (weeksFrom != 0) {
      startDate.setDate(startDate.getDate() - 7 * weeksFrom);
      endDate.setDate(endDate.getDate() + 7 * weeksFrom);
    }

    return new DateRanges(startDate, endDate);
  }

  static getLastMonday(date: Date): Date {
    var d = date != null ? date : new Date();
    d.setHours(0, 0, 0, 0);

    var day = d.getDay();
    var diff = d.getDate() - day + (day == 0 ? -6 : 1);
    return new Date(d.setDate(diff));
  }
}

export class DateRanges {
  constructor(startDate: Date, endDate: Date) {
    this.startDate = startDate;
    this.endDate = endDate;
  }

  startDate: Date;
  endDate: Date;
}
