import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() parent = "test";
  @Output() newcurrentDataEvent = new EventEmitter<string>();

  ngOnInit(): void { }
  
  addNewContent(value: string) {
    this.newcurrentDataEvent.emit(value);
  }
}
