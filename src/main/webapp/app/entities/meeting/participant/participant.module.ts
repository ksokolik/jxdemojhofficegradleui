import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UiSharedModule } from 'app/shared/shared.module';
import { ParticipantComponent } from './participant.component';
import { ParticipantDetailComponent } from './participant-detail.component';
import { ParticipantUpdateComponent } from './participant-update.component';
import { ParticipantDeletePopupComponent, ParticipantDeleteDialogComponent } from './participant-delete-dialog.component';
import { participantRoute, participantPopupRoute } from './participant.route';

const ENTITY_STATES = [...participantRoute, ...participantPopupRoute];

@NgModule({
  imports: [UiSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    ParticipantComponent,
    ParticipantDetailComponent,
    ParticipantUpdateComponent,
    ParticipantDeleteDialogComponent,
    ParticipantDeletePopupComponent
  ],
  entryComponents: [ParticipantDeleteDialogComponent]
})
export class MeetingParticipantModule {}
