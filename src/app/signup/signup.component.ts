import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CCS} from '../ccs_service';

// import {ActivatedRoute, Router} from '@angular/router';

export interface sex {
  value: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  title = "registration form";
  userForm!: FormGroup;
  // @Output() formdata = new EventEmitter();
  stateInfo: any = [];
  countryInfo: any = [];
  cityInfo: any = [];
  formData: any;
  gender: any = [
    {value: 'Male', viewValue: 'Male'},
    {value: 'Female', viewValue: 'Female'}
  ];

  constructor(
    private country: CCS,
  ) {
  }

  ngOnInit(): void {
    this.getCountries();
    this.userForm = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      gender: new FormControl('male', Validators.required),
      mobile: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
    });
    // this.userForm;
  }

  getCountries() {
    this.country.allCountries().subscribe(
      (data2: { Countries: any; }) => {
        this.countryInfo = data2.Countries;
        //console.log('Data:', this.countryInfo);
      },
      (err: any) => console.log(err),
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
    console.log(JSON.stringify(this.userForm.value));
  }
}

