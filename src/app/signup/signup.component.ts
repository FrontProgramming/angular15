import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  title = "Registration Form";
  userForm!: FormGroup;
  stateInfo: any = [];
  countryInfo: any = [];
  cityInfo: any = [];
  gender: any = [
    { value: 'Male', viewValue: 'Male' },
    { value: 'Female', viewValue: 'Female' }
  ];

  // const countries = of(this.countryInfo);

  constructor(private country: CCS, private formDataService: UserRegFormServiceService, private router: Router) {
    this.userForm = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      gender: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      landmark: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      zipcode: new FormControl('', Validators.required)
    });
  }

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

  onSubmit(): void {
    console.log(JSON.stringify(this.userForm.value));
    if (this.userForm.valid) {
      const formData = this.userForm.value;
      this.formDataService.setFormData(formData);
      this.router.navigate(['/user']);
    }
  }
}

