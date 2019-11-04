import { IMeeting } from 'app/shared/model/meeting/meeting.model';

export interface IParticipant {
  id?: number;
  email?: string;
  meetings?: IMeeting[];
}

export class Participant implements IParticipant {
  constructor(public id?: number, public email?: string, public meetings?: IMeeting[]) {}
}
