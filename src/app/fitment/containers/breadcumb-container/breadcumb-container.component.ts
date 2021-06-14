import * as VehicleAction from '../../actions/vehicle.actions';
import * as fromFitment from '../../reducers';

import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-breadcumb-container',
  templateUrl: './breadcumb-container.component.html',
  styleUrls: ['./breadcumb-container.component.scss'],
})
export class BreadcumbContainerComponent implements OnInit {
  make$: Observable<string>;
  model$: Observable<string>;
  year$: Observable<string>;
  trim$: Observable<string>;
  currentDescription$: Observable<string>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.make$ = this.store.select(fromFitment.selectVehicleMake);
    this.model$ = this.store.select(fromFitment.selectVehicleModel);
    this.year$ = this.store.select(fromFitment.selectVehicleYear);
    this.trim$ = this.store.select(fromFitment.selectVehicleTrim);
    this.currentDescription$ = this.store.select(fromFitment.selectVehicleYearMakeModelTrim);
  }

  yearClick() {
    this.makeClick();
    this.store.dispatch(VehicleAction.YEAR_SELECTED({ value: null }));
  }

  makeClick() {
    this.modelClick();
    this.store.dispatch(VehicleAction.MAKE_SELECTED({ value: null }));
  }

  modelClick() {
    this.trimClick();
    this.store.dispatch(VehicleAction.MODEL_SELECTED({ value: null }));
  }

  trimClick() {
    this.store.dispatch(VehicleAction.TRIM_SELECTED({ value: null }));
  }
}
