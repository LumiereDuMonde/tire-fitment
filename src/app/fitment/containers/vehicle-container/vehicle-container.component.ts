import * as VehicleAction from '../../actions/vehicle.actions';
import * as fromFitment from '../../reducers';

import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest, of } from 'rxjs';

import { FitmentSteps } from '../../models/fitment.enums';
import { Store } from '@ngrx/store';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-vehicle-container',
  templateUrl: './vehicle-container.component.html',
  styleUrls: ['./vehicle-container.component.scss'],
})
export class VehicleContainerComponent implements OnInit {
  currentlyDisplayedData$: Observable<string[]>;
  step: FitmentSteps = FitmentSteps.begin;
  loading$: Observable<boolean>;  
  error$: Observable<string>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    const combined$ = combineLatest([
      this.store.select(fromFitment.selectVehicleYear),
      this.store.select(fromFitment.selectVehicleMake),
      this.store.select(fromFitment.selectVehicleModel),
      this.store.select(fromFitment.selectVehicleTrim),
    ]);

    // decide which item array is shown
    this.currentlyDisplayedData$ = combined$.pipe(
      switchMap(([year, make, model, trim]) => {
        if (trim) {
          this.step = FitmentSteps.done;
          return of([] as string[]);
        }
        if (model) {
          this.step = FitmentSteps.trim;
          return this.store.select(fromFitment.selectVehicleTrims);
        }
        if (make) {
          this.step = FitmentSteps.model;
          return this.store.select(fromFitment.selectVehicleModels);
        }

        if (year) {
          this.step = FitmentSteps.make;
          return this.store.select(fromFitment.selectVehicleMakes);
        }
        this.step = FitmentSteps.year;
        return this.store.select(fromFitment.selectVehicleYears);
      })
    );

    this.loading$ = this.store.select(fromFitment.selectLoadingStatus);

    this.error$ = this.store.select(fromFitment.selectError);
  }

  itemSelected(value: string) {
    switch (this.step) {
      case FitmentSteps.make:
        this.store.dispatch(VehicleAction.MAKE_SELECTED({ value }));
        break;
      case FitmentSteps.year:
        this.store.dispatch(VehicleAction.YEAR_SELECTED({ value }));
        break;
      case FitmentSteps.model:
        this.store.dispatch(VehicleAction.MODEL_SELECTED({ value }));
        break;
      case FitmentSteps.trim:
        this.store.dispatch(VehicleAction.TRIM_SELECTED({ value }));
        break;
    }
  }
}
