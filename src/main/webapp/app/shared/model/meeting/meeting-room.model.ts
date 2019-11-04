export interface IMeetingRoom {
  id?: number;
  code?: string;
  location?: string;
  name?: string;
}

export class MeetingRoom implements IMeetingRoom {
  constructor(public id?: number, public code?: string, public location?: string, public name?: string) {}
}
