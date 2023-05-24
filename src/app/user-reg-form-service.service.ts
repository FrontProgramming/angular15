import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserRegFormServiceService {
  private formData: any;
  // constructor() { }
  setFormData(data: any): void {
    this.formData = data;
  }

  getFormData(): any {
    return this.formData;
  }
}
