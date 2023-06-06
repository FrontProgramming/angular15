import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  filterTerm!: string;
  filterData = [
    {
      id: 'R1',
      firstName: 'FNAME 1',
      lastName: 'LNAME 1',
      address: 'ADDRESS 1'
    },
    {
      id: 'R2',
      firstName: 'FNAME 2',
      lastName: 'LNAME 2',
      address: 'ADDRESS 2'
    },
    {
      id: 'R3',
      firstName: 'FNAME 3',
      lastName: 'LNAME 3',
      address: 'ADDRESS 3'
    },
    {
      id: 'R4',
      firstName: 'FNAME 4',
      lastName: 'LNAME 4',
      address: 'ADDRESS 4'
    },
    {
      id: 'R5',
      firstName: 'FNAME 5',
      lastName: 'LNAME 5',
      address: 'ADDRESS 5'
    },
    {
      id: 'R6',
      firstName: 'FNAME 6',
      lastName: 'LNAME 6',
      address: 'ADDRESS 6'
    },
  ]
}
