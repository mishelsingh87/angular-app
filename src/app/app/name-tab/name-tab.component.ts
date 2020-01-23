import { Component, OnInit } from '@angular/core';
import { empDetails } from './empData';
import { Data } from './data';

@Component({
  selector: 'app-name-tab',
  templateUrl: './name-tab.component.html',
  styleUrls: ['./name-tab.component.css']
})
export class NameTabComponent implements OnInit {

  empData: empDetails[]=Data;
  selectedEmp:empDetails;

  constructor() { }

  ngOnInit() {
  }

  onSelectEmp(emp:empDetails): void{
    this.selectedEmp = emp;
    console.log(this.selectedEmp);
  }

}
