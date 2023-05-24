import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  // receivedFormData: any;

  @Input() receivedFormData: any;
  
  firstname: any;
  lastname: any;
  email: any;

  // @Output() getResponse = new EventEmitter;

  constructor() { }

  receiveFormData(formData: any): void {
    this.receivedFormData = formData;
    console.log(this.receivedFormData)
  }
}
