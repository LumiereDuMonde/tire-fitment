import * as VehicleActions from './actions/vehicle.actions';

import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

@Component({
  selector: 'app-fitment',
  templateUrl: './fitment.component.html',
  styleUrls: ['./fitment.component.scss'],
})
export class FitmentComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(VehicleActions.YEAR_FETCH_START());
  }
}
