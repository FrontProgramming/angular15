import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CCS } from '../ccs_service';
import { UserRegFormServiceService } from "../user-reg-form-service.service";

import { Router } from '@angular/router';

export interface sex {
  value: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  constructor( private country: CCS, private formDataService: UserRegFormServiceService, private fb: FormBuilder,) {
    this.userForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      email: [''],
      sex: [''],
      mobile: [''],
      userAddress: [''],
      userLandmark: [''],
      userCountry: [''],
      userState: [''],
      userCity: [''],
      userZipcode: ['']
    });
  }

  title = "Registration Form";
  userForm!: FormGroup;
  stateInfo: any = [];
  countryInfo: any = [];
  cityInfo: any = [];
  gender: any = [
    { value: 'Male', viewValue: 'Male' },
    { value: 'Female', viewValue: 'Female' }
  ];

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this.country.allCountries().subscribe((data2: { Countries: any; }) => {
      this.countryInfo = data2.Countries;
    }, (err: any) => console.log(err), () => console.log('complete'))
  }

  onChangeCountry(countryValue: any) {
    this.stateInfo = this.countryInfo[countryValue].States;
    this.cityInfo = this.stateInfo[0].Cities;
    // console.log(this.cityInfo);
  }

  onChangeState(stateValue: any) {
    this.cityInfo = this.stateInfo[stateValue].Cities;
    //console.log(this.cityInfo);
  }

  submitForm(): void {
    console.log(JSON.stringify(this.userForm.value));
    if (this.userForm.valid) {
      const formData = this.userForm.value;
      this.formDataService.sendFormData(formData);
    }
  }
}

