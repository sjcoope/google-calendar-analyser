export class KeyValuePair {
  constructor(key: string, value: string) {
    this.key = key;
    this.value = value;
  }

  key: string;
  value: string;
}

export class Convertor {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  static toMultiDimensionalArray(items: Array<any>, removeTitleRow?: boolean): Array<Array<string>> {
    if (!items) {
      throw new Error('toMultiDimensionalArray: Invalid parameter');
    }

    const parentArray = [];
    let childArray = [];
    if (items.length == 0) return parentArray;

    const startIndex: number = removeTitleRow ? 1 : 0;
    for (let i = startIndex; i < items.length; i++) {
      const item = items[i];
      childArray = [];
      for (const property in item) {
        /* eslint-disable no-prototype-builtins */
        if (item.hasOwnProperty(property)) {
          childArray.push(item[property]);
        }
        /* eslint-enable no-prototype-builtins */
      }
      parentArray.push(childArray);
    }

    return parentArray;
  }
  /* eslint-enable @typescript-eslint/no-explicit-any */
}

export class DateHelper {
  // TODO: Move to DateFormatter class to keep in with formatting options.
  static formatDate(date: Date): string {
    if (!date) throw new Error('formatDate - date parameter is invalid');

    return (
      date.getFullYear() +
      '-' +
      ('0' + (date.getMonth() + 1)).slice(-2) +
      '-' +
      ('0' + date.getDate()).slice(-2) +
      'T' +
      ('0' + date.getHours()).slice(-2) +
      ':' +
      ('0' + date.getMinutes()).slice(-2)
    );
  }

  static getDateRanges(weeksFrom: number, date?: Date): DateRanges {
    if (weeksFrom == null || weeksFrom == undefined || isNaN(weeksFrom)) {
      throw new Error('getDateRanges - weekNumber parameter is invalid');
    }

    const currentDate = date ?? new Date();
    const startDate = DateHelper.getLastMonday(currentDate);
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() - endDate.getDay() + 5);
    endDate.setHours(23, 59, 59);

    if (weeksFrom != 0) {
      startDate.setDate(startDate.getDate() - 7 * weeksFrom);
      endDate.setDate(endDate.getDate() + 7 * weeksFrom);
    }

    return new DateRanges(startDate, endDate);
  }

  static getLastMonday(date: Date): Date {
    const d = date != null ? date : new Date();
    d.setHours(0, 0, 0, 0);

    const day = d.getDay();
    const diff = d.getDate() - day + (day == 0 ? -6 : 1);
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
