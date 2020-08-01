export class EventDateMock implements GoogleAppsScript.Base.Date {
  baseDate: Date;

  constructor(date: string) {
    this.baseDate = new Date(date);
  }

  toString(): string {
    return this.baseDate.toString();
  }
  toDateString(): string {
    throw new Error('Method not implemented.');
  }
  toTimeString(): string {
    throw new Error('Method not implemented.');
  }
  toLocaleString(): string {
    throw new Error('Method not implemented.');
  }
  toLocaleDateString(): string {
    throw new Error('Method not implemented.');
  }
  toLocaleTimeString(): string {
    throw new Error('Method not implemented.');
  }
  valueOf(): number {
    throw new Error('Method not implemented.');
  }
  getTime(): number {
    throw new Error('Method not implemented.');
  }
  getFullYear(): number {
    throw new Error('Method not implemented.');
  }
  getUTCFullYear(): number {
    throw new Error('Method not implemented.');
  }
  getMonth(): number {
    throw new Error('Method not implemented.');
  }
  getUTCMonth(): number {
    throw new Error('Method not implemented.');
  }
  getDate(): number {
    throw new Error('Method not implemented.');
  }
  getUTCDate(): number {
    throw new Error('Method not implemented.');
  }
  getDay(): number {
    throw new Error('Method not implemented.');
  }
  getUTCDay(): number {
    throw new Error('Method not implemented.');
  }
  getHours(): number {
    throw new Error('Method not implemented.');
  }
  getUTCHours(): number {
    throw new Error('Method not implemented.');
  }
  getMinutes(): number {
    throw new Error('Method not implemented.');
  }
  getUTCMinutes(): number {
    throw new Error('Method not implemented.');
  }
  getSeconds(): number {
    throw new Error('Method not implemented.');
  }
  getUTCSeconds(): number {
    throw new Error('Method not implemented.');
  }
  getMilliseconds(): number {
    throw new Error('Method not implemented.');
  }
  getUTCMilliseconds(): number {
    throw new Error('Method not implemented.');
  }
  getTimezoneOffset(): number {
    throw new Error('Method not implemented.');
  }
  setTime(time: number): number {
    throw new Error('Method not implemented.');
  }
  setMilliseconds(ms: number): number {
    throw new Error('Method not implemented.');
  }
  setUTCMilliseconds(ms: number): number {
    throw new Error('Method not implemented.');
  }
  setSeconds(sec: number, ms?: number): number {
    throw new Error('Method not implemented.');
  }
  setUTCSeconds(sec: number, ms?: number): number {
    throw new Error('Method not implemented.');
  }
  setMinutes(min: number, sec?: number, ms?: number): number {
    throw new Error('Method not implemented.');
  }
  setUTCMinutes(min: number, sec?: number, ms?: number): number {
    throw new Error('Method not implemented.');
  }
  setHours(hours: number, min?: number, sec?: number, ms?: number): number {
    throw new Error('Method not implemented.');
  }
  setUTCHours(hours: number, min?: number, sec?: number, ms?: number): number {
    throw new Error('Method not implemented.');
  }
  setDate(date: number): number {
    throw new Error('Method not implemented.');
  }
  setUTCDate(date: number): number {
    throw new Error('Method not implemented.');
  }
  setMonth(month: number, date?: number): number {
    throw new Error('Method not implemented.');
  }
  setUTCMonth(month: number, date?: number): number {
    throw new Error('Method not implemented.');
  }
  setFullYear(year: number, month?: number, date?: number): number {
    throw new Error('Method not implemented.');
  }
  setUTCFullYear(year: number, month?: number, date?: number): number {
    throw new Error('Method not implemented.');
  }
  toUTCString(): string {
    throw new Error('Method not implemented.');
  }
  toISOString(): string {
    throw new Error('Method not implemented.');
  }
  toJSON(key?: any): string {
    throw new Error('Method not implemented.');
  }
}
