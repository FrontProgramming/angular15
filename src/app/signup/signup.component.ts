import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {  } from '@angular/core';
import { CCS } from '../ccs_service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  title = "User Registration Form";
  userForm!: FormGroup;
  @Output() formSubmit = new EventEmitter<FormGroup>();
  firstname!: string;
  stateInfo: any = [];
  countryInfo: any = [];
  cityInfo: any = [];

  sendToUser!: string;
  message: any;

  constructor(private country: CCS, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getCountries();
    this.userForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      email: [''],
    });
  }

  getResponse($event: any) {
    this.message = $event;
  }
  submit() {
    this.sendToUser = this.firstname;
  }

  getCountries() {
    this.country.allCountries().
      subscribe(
        data2 => {
          this.countryInfo = data2.Countries;
          //console.log('Data:', this.countryInfo);
        },
        err => console.log(err),
        () => console.log('complete')
      )
  }

  onChangeCountry(countryValue: any) {
    this.stateInfo = this.countryInfo[countryValue].States;
    this.cityInfo = this.stateInfo[0].Cities;
    console.log(this.cityInfo);
  }

  onChangeState(stateValue: any) {
    this.cityInfo = this.stateInfo[stateValue].Cities;
    //console.log(this.cityInfo);
  }

  onSubmit(): void {
    const formData = this.userForm.value;
    // pass the form data to the child component
  }
}
