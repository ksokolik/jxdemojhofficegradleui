import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UiSharedModule } from 'app/shared/shared.module';
import { MeetingComponent } from './meeting.component';
import { MeetingDetailComponent } from './meeting-detail.component';
import { MeetingUpdateComponent } from './meeting-update.component';
import { MeetingDeletePopupComponent, MeetingDeleteDialogComponent } from './meeting-delete-dialog.component';
import { meetingRoute, meetingPopupRoute } from './meeting.route';

const ENTITY_STATES = [...meetingRoute, ...meetingPopupRoute];

@NgModule({
  imports: [UiSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    MeetingComponent,
    MeetingDetailComponent,
    MeetingUpdateComponent,
    MeetingDeleteDialogComponent,
    MeetingDeletePopupComponent
  ],
  entryComponents: [MeetingDeleteDialogComponent]
})
export class MeetingMeetingModule {}
