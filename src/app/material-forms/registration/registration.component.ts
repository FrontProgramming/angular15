import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { CCS } from "../../ccs_service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  stateInfo: any  = [];
  countryInfo: any = [];
  cityInfo: any = [];
  userForm!: FormGroup;

  constructor(
    public fb: FormBuilder,
    private country: CCS)
  { }

  ngOnInit(): void {
    // this.reactiveForm();
    this.getCountries();
  }

  // matcher = new MyErrorStateMatcher();

  reactiveForm() {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      gender: ['Male', [Validators.required]],
      dob: ['', [Validators.required]],
      email: ['', [Validators.required]]  ,
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]],
      country: ['', [Validators.required]],
      state: ['', [Validators.required]],
      city: ['', [Validators.required]]
    })
  }
  submitForm() {
    console.log(this.userForm.value);
  }

  getCountries(){
    this.country.allCountries().
    subscribe(
      data2 => {
        this.countryInfo=data2.Countries;
        //console.log('Data:', this.countryInfo);
      },
      err => console.log(err),
      () => console.log('complete')
    )
  }

  onChangeCountry(countryValue:any) {
    this.stateInfo=this.countryInfo[countryValue].States;
    this.cityInfo=this.stateInfo[0].Cities;
    // console.log(this.cityInfo);
  }

  onChangeState(stateValue:any) {
    this.cityInfo=this.stateInfo[stateValue].Cities;
    //console.log(this.cityInfo);
  }
}
