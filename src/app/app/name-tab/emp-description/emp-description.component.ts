import { Component, OnInit, Input } from '@angular/core';
import { empDetails } from '../empData';

@Component({
  selector: 'app-emp-description',
  templateUrl: './emp-description.component.html',
  styleUrls: ['./emp-description.component.css']
})
export class EmpDescriptionComponent implements OnInit {

  @Input() empDesc:empDetails;

  constructor() { }

  ngOnInit() {
  }

}
