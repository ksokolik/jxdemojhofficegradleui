import { Moment } from 'moment';
import { LeaveRequestType } from 'app/shared/model/enumerations/leave-request-type.model';
import { LeaveRequestStatus } from 'app/shared/model/enumerations/leave-request-status.model';

export interface ILeaveRequest {
  id?: number;
  startDate?: Moment;
  endDate?: Moment;
  creationDate?: Moment;
  departmentCode?: string;
  employeeCode?: string;
  workingDays?: number;
  description?: string;
  leaveType?: LeaveRequestType;
  status?: LeaveRequestStatus;
}

export class LeaveRequest implements ILeaveRequest {
  constructor(
    public id?: number,
    public startDate?: Moment,
    public endDate?: Moment,
    public creationDate?: Moment,
    public departmentCode?: string,
    public employeeCode?: string,
    public workingDays?: number,
    public description?: string,
    public leaveType?: LeaveRequestType,
    public status?: LeaveRequestStatus
  ) {}
}
