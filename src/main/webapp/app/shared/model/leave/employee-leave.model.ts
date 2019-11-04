export interface IEmployeeLeave {
  id?: number;
  employeeCode?: string;
  total?: number;
  available?: number;
}

export class EmployeeLeave implements IEmployeeLeave {
  constructor(public id?: number, public employeeCode?: string, public total?: number, public available?: number) {}
}
