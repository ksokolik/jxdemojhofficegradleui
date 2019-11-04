import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { take, map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { LeaveRequestService } from 'app/entities/leave/leave-request/leave-request.service';
import { ILeaveRequest, LeaveRequest } from 'app/shared/model/leave/leave-request.model';
import { LeaveRequestType } from 'app/shared/model/enumerations/leave-request-type.model';
import { LeaveRequestStatus } from 'app/shared/model/enumerations/leave-request-status.model';

describe('Service Tests', () => {
  describe('LeaveRequest Service', () => {
    let injector: TestBed;
    let service: LeaveRequestService;
    let httpMock: HttpTestingController;
    let elemDefault: ILeaveRequest;
    let expectedResult;
    let currentDate: moment.Moment;
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
      });
      expectedResult = {};
      injector = getTestBed();
      service = injector.get(LeaveRequestService);
      httpMock = injector.get(HttpTestingController);
      currentDate = moment();

      elemDefault = new LeaveRequest(
        0,
        currentDate,
        currentDate,
        currentDate,
        'AAAAAAA',
        'AAAAAAA',
        0,
        'AAAAAAA',
        LeaveRequestType.VACATION,
        LeaveRequestStatus.COMPLETED
      );
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign(
          {
            startDate: currentDate.format(DATE_TIME_FORMAT),
            endDate: currentDate.format(DATE_TIME_FORMAT),
            creationDate: currentDate.format(DATE_TIME_FORMAT)
          },
          elemDefault
        );
        service
          .find(123)
          .pipe(take(1))
          .subscribe(resp => (expectedResult = resp));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject({ body: elemDefault });
      });

      it('should create a LeaveRequest', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
            startDate: currentDate.format(DATE_TIME_FORMAT),
            endDate: currentDate.format(DATE_TIME_FORMAT),
            creationDate: currentDate.format(DATE_TIME_FORMAT)
          },
          elemDefault
        );
        const expected = Object.assign(
          {
            startDate: currentDate,
            endDate: currentDate,
            creationDate: currentDate
          },
          returnedFromService
        );
        service
          .create(new LeaveRequest(null))
          .pipe(take(1))
          .subscribe(resp => (expectedResult = resp));
        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject({ body: expected });
      });

      it('should update a LeaveRequest', () => {
        const returnedFromService = Object.assign(
          {
            startDate: currentDate.format(DATE_TIME_FORMAT),
            endDate: currentDate.format(DATE_TIME_FORMAT),
            creationDate: currentDate.format(DATE_TIME_FORMAT),
            departmentCode: 'BBBBBB',
            employeeCode: 'BBBBBB',
            workingDays: 1,
            description: 'BBBBBB',
            leaveType: 'BBBBBB',
            status: 'BBBBBB'
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            startDate: currentDate,
            endDate: currentDate,
            creationDate: currentDate
          },
          returnedFromService
        );
        service
          .update(expected)
          .pipe(take(1))
          .subscribe(resp => (expectedResult = resp));
        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject({ body: expected });
      });

      it('should return a list of LeaveRequest', () => {
        const returnedFromService = Object.assign(
          {
            startDate: currentDate.format(DATE_TIME_FORMAT),
            endDate: currentDate.format(DATE_TIME_FORMAT),
            creationDate: currentDate.format(DATE_TIME_FORMAT),
            departmentCode: 'BBBBBB',
            employeeCode: 'BBBBBB',
            workingDays: 1,
            description: 'BBBBBB',
            leaveType: 'BBBBBB',
            status: 'BBBBBB'
          },
          elemDefault
        );
        const expected = Object.assign(
          {
            startDate: currentDate,
            endDate: currentDate,
            creationDate: currentDate
          },
          returnedFromService
        );
        service
          .query(expected)
          .pipe(
            take(1),
            map(resp => resp.body)
          )
          .subscribe(body => (expectedResult = body));
        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([returnedFromService]);
        httpMock.verify();
        expect(expectedResult).toContainEqual(expected);
      });

      it('should delete a LeaveRequest', () => {
        service.delete(123).subscribe(resp => (expectedResult = resp.ok));

        const req = httpMock.expectOne({ method: 'DELETE' });
        req.flush({ status: 200 });
        expect(expectedResult);
      });
    });

    afterEach(() => {
      httpMock.verify();
    });
  });
});
