import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  currentData = "test content 2";
  data = ['DATA 1', 'DATA 2', 'DATA 3', 'DATA 4',];

  addNewContent(newcurrentData: string) {
    this.data.push(newcurrentData); // after this I'm updating the parent template (HTML)
    this.clearField()
  }
  clearField(){
    let userInput = <HTMLInputElement>document.getElementById('userInput');
    userInput.value='';
  }

}
