import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRegFormServiceService {
  private dataSubject = new Subject<any>();
  formData$ = this.dataSubject.asObservable();

  sendFormData(formData: any) {
    this.dataSubject.next(formData);
  }
}
