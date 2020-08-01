export class EventGuestMock implements GoogleAppsScript.Calendar.EventGuest {
  email: string;

  constructor(email: string) {
    this.email = email;
  }

  getAdditionalGuests(): number {
    throw new Error('Method not implemented.');
  }
  getEmail(): string {
    return this.email;
  }
  getGuestStatus(): GoogleAppsScript.Calendar.GuestStatus {
    throw new Error('Method not implemented.');
  }
  getName(): string {
    throw new Error('Method not implemented.');
  }
  getStatus(): string {
    throw new Error('Method not implemented.');
  }
}
