import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CCS } from '../ccs_service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  title = "registration form";
  userForm!: FormGroup;

  @Output() formdata = new EventEmitter();

  stateInfo: any = [];
  countryInfo: any = [];
  cityInfo: any = [];
  formData: any;

  constructor(
    private country: CCS,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getCountries();
    this.userForm = this.fb.group({
      // firstname: ['', Validators.required],
      // lastname: ['', Validators.required],
      // email: ['', Validators.required],
      firstname: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
    });
    // this.userForm;
  }

  getCountries() {
    this.country.allCountries().
   subscribe(
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
    if (this.userForm.valid) {
      this.formData.emit(this.userForm.value);
      this.router.navigateByUrl('/user');
      this.userForm.reset();
    }  
    // passing data form parent to child component
  }
}

