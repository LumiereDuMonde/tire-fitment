import { Component, Input, OnInit } from '@angular/core';

import { Tire } from '../../models/tire.model';

@Component({
  selector: 'app-tire',
  templateUrl: './tire.component.html',
  styleUrls: ['./tire.component.scss']
})
export class TireComponent implements OnInit {

  @Input() tires: Tire[];

  constructor() { }

  ngOnInit(): void {
  }

}
