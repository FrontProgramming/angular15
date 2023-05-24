import { TestBed } from '@angular/core/testing';

import { UserRegFormServiceService } from './user-reg-form-service.service';

describe('UserRegFormServiceService', () => {
  let service: UserRegFormServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRegFormServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
