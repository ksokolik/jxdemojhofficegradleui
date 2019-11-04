import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'employee',
        loadChildren: () => import('./organization/employee/employee.module').then(m => m.OrganizationEmployeeModule)
      },
      {
        path: 'department',
        loadChildren: () => import('./organization/department/department.module').then(m => m.OrganizationDepartmentModule)
      },
      {
        path: 'employee-leave',
        loadChildren: () => import('./leave/employee-leave/employee-leave.module').then(m => m.LeaveEmployeeLeaveModule)
      },
      {
        path: 'leave-request',
        loadChildren: () => import('./leave/leave-request/leave-request.module').then(m => m.LeaveLeaveRequestModule)
      },
      {
        path: 'notification',
        loadChildren: () => import('./notification/notification/notification.module').then(m => m.NotificationNotificationModule)
      },
      {
        path: 'meeting-room',
        loadChildren: () => import('./meeting/meeting-room/meeting-room.module').then(m => m.MeetingMeetingRoomModule)
      },
      {
        path: 'participant',
        loadChildren: () => import('./meeting/participant/participant.module').then(m => m.MeetingParticipantModule)
      },
      {
        path: 'meeting',
        loadChildren: () => import('./meeting/meeting/meeting.module').then(m => m.MeetingMeetingModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class UiEntityModule {}
