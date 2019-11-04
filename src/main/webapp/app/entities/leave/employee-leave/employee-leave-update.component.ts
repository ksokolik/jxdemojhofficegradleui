import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IEmployeeLeave, EmployeeLeave } from 'app/shared/model/leave/employee-leave.model';
import { EmployeeLeaveService } from './employee-leave.service';

@Component({
  selector: 'jhi-employee-leave-update',
  templateUrl: './employee-leave-update.component.html'
})
export class EmployeeLeaveUpdateComponent implements OnInit {
  isSaving: boolean;

  editForm = this.fb.group({
    id: [],
    employeeCode: [null, [Validators.required]],
    total: [null, [Validators.required]],
    available: [null, [Validators.required]]
  });

  constructor(protected employeeLeaveService: EmployeeLeaveService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ employeeLeave }) => {
      this.updateForm(employeeLeave);
    });
  }

  updateForm(employeeLeave: IEmployeeLeave) {
    this.editForm.patchValue({
      id: employeeLeave.id,
      employeeCode: employeeLeave.employeeCode,
      total: employeeLeave.total,
      available: employeeLeave.available
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const employeeLeave = this.createFromForm();
    if (employeeLeave.id !== undefined) {
      this.subscribeToSaveResponse(this.employeeLeaveService.update(employeeLeave));
    } else {
      this.subscribeToSaveResponse(this.employeeLeaveService.create(employeeLeave));
    }
  }

  private createFromForm(): IEmployeeLeave {
    return {
      ...new EmployeeLeave(),
      id: this.editForm.get(['id']).value,
      employeeCode: this.editForm.get(['employeeCode']).value,
      total: this.editForm.get(['total']).value,
      available: this.editForm.get(['available']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IEmployeeLeave>>) {
    result.subscribe(() => this.onSaveSuccess(), () => this.onSaveError());
  }

  protected onSaveSuccess() {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError() {
    this.isSaving = false;
  }
}
