import { Component, OnInit } from '@angular/core';
import {CCS} from "../ccs_service";
// import { of } from 'rxjs';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {

  stateInfo: any  = [];
  countryInfo: any = [];
  cityInfo: any = [];

  constructor(private country: CCS) { }

  ngOnInit() {
    this.getCountries();
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
