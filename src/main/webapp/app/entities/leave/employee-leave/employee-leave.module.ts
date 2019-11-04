import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UiSharedModule } from 'app/shared/shared.module';
import { EmployeeLeaveComponent } from './employee-leave.component';
import { EmployeeLeaveDetailComponent } from './employee-leave-detail.component';
import { EmployeeLeaveUpdateComponent } from './employee-leave-update.component';
import { EmployeeLeaveDeletePopupComponent, EmployeeLeaveDeleteDialogComponent } from './employee-leave-delete-dialog.component';
import { employeeLeaveRoute, employeeLeavePopupRoute } from './employee-leave.route';

const ENTITY_STATES = [...employeeLeaveRoute, ...employeeLeavePopupRoute];

@NgModule({
  imports: [UiSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    EmployeeLeaveComponent,
    EmployeeLeaveDetailComponent,
    EmployeeLeaveUpdateComponent,
    EmployeeLeaveDeleteDialogComponent,
    EmployeeLeaveDeletePopupComponent
  ],
  entryComponents: [EmployeeLeaveDeleteDialogComponent]
})
export class LeaveEmployeeLeaveModule {}
