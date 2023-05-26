import { Component, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input() receivedFormData: any;

  constructor() { }

  receiveFormData(formData: any): void {
    this.receivedFormData = formData;
    console.log(this.receivedFormData)
  }
}
