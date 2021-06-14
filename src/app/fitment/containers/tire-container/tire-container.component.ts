import * as VehicleAction from '../../actions/vehicle.actions';
import * as fromFitment from '../../reducers';

import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Tire } from '../../models/tire.model';

@Component({
  selector: 'app-tire-container',
  templateUrl: './tire-container.component.html',
  styleUrls: ['./tire-container.component.scss']
})
export class TireContainerComponent implements OnInit {

  tires$: Observable<Tire[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.tires$ = this.store.select(fromFitment.selectVehicleTires);
    this.loading$ = this.store.select(fromFitment.selectLoadingStatus);        
  }

}
