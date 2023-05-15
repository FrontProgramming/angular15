import { Component, Input } from '@angular/core';
// import { SignupComponent } from '../signup/signup.component';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() formData: any;
  firstname: any;
  lastname: any;
  email: any;
userForm: any;

  // @Output() getResponse = new EventEmitter;

  // constructor() { }
}
