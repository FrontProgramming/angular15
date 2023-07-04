import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CCS } from '../ccs_service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  @Output() event = new EventEmitter<any>();

  title = "Registration Form";
  userForm!: FormGroup;
  stateInfo: any = [];
  countryInfo: any = [];
  cityInfo: any = [];
  gender: any = [
    { value: 'Male', viewValue: 'Male' },
    { value: 'Female', viewValue: 'Female' }
  ];
  
  submitted: any;

  constructor( private fb: FormBuilder, private country: CCS) {
    this.userForm = this.fb.group({
      firstname: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      sex: new FormControl('null', Validators.required),
      mobile: new FormControl('', Validators.required),
      userAddress: new FormControl('', Validators.required),
      userLandmark: new FormControl('', Validators.required),
      userCountry: new FormControl('null', Validators.required),
      userState: new FormControl('', Validators.required),
      userCity: new FormControl('', Validators.required),
      userZipcode: new FormControl('', [Validators.required])
    });
  }
  // Firstname: any;

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(){
    this.country.allCountries().
    subscribe(
      data2 => {
        this.countryInfo=data2.Countries;
      },
      err => console.log(err),
      () => console.log('complete')
    )
  }

  onChangeCountry(countryValue: any) {
    this.stateInfo = this.countryInfo[countryValue].States;
    this.cityInfo = this.stateInfo[0].Cities;
  }

  onChangeState(stateValue: any) {
    this.cityInfo = this.stateInfo[stateValue].Cities;
  }

  submitForm(): void{
    console.warn(this.userForm.value);
    this.userForm.reset();
  }

}

