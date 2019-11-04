import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UiSharedModule } from 'app/shared/shared.module';
import { LeaveRequestComponent } from './leave-request.component';
import { LeaveRequestDetailComponent } from './leave-request-detail.component';
import { LeaveRequestUpdateComponent } from './leave-request-update.component';
import { LeaveRequestDeletePopupComponent, LeaveRequestDeleteDialogComponent } from './leave-request-delete-dialog.component';
import { leaveRequestRoute, leaveRequestPopupRoute } from './leave-request.route';

const ENTITY_STATES = [...leaveRequestRoute, ...leaveRequestPopupRoute];

@NgModule({
  imports: [UiSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    LeaveRequestComponent,
    LeaveRequestDetailComponent,
    LeaveRequestUpdateComponent,
    LeaveRequestDeleteDialogComponent,
    LeaveRequestDeletePopupComponent
  ],
  entryComponents: [LeaveRequestDeleteDialogComponent]
})
export class LeaveLeaveRequestModule {}
