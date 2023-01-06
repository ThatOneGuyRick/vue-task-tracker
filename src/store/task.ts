export class Task {
  id?: number;
  text: string;
  day: string;
  reminder: boolean;

  constructor(text: string, day: string, reminder: boolean) {
    this.text = text;
    this.day = day;
    this.reminder = reminder;
  }
}