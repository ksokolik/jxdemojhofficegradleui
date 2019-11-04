import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UiSharedModule } from 'app/shared/shared.module';
import { MeetingRoomComponent } from './meeting-room.component';
import { MeetingRoomDetailComponent } from './meeting-room-detail.component';
import { MeetingRoomUpdateComponent } from './meeting-room-update.component';
import { MeetingRoomDeletePopupComponent, MeetingRoomDeleteDialogComponent } from './meeting-room-delete-dialog.component';
import { meetingRoomRoute, meetingRoomPopupRoute } from './meeting-room.route';

const ENTITY_STATES = [...meetingRoomRoute, ...meetingRoomPopupRoute];

@NgModule({
  imports: [UiSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    MeetingRoomComponent,
    MeetingRoomDetailComponent,
    MeetingRoomUpdateComponent,
    MeetingRoomDeleteDialogComponent,
    MeetingRoomDeletePopupComponent
  ],
  entryComponents: [MeetingRoomDeleteDialogComponent]
})
export class MeetingMeetingRoomModule {}
