import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-table',
  templateUrl: './status-table.component.html',
})
export class StatusTableComponent implements OnInit {

  numbers = [0,1,2,3,4,5,6,9,9,9,9]

  constructor() { }

  ngOnInit(): void {
  }

}
