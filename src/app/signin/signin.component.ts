import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  title = "login"
  // positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  // position = new FormControl(this.positionOptions[0]);
  constructor() { }
  ngOnInit(): void {
  }
}
