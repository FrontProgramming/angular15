import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  parentForm!: FormGroup;

  constructor(private fb: FormBuilder,) { }
  ngOnInit() {}

  onReset() {
    this.parentForm.reset();
  }
}
