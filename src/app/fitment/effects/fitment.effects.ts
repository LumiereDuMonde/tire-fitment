import * as VehicleActions from '../actions/vehicle.actions';
import * as fromFitment from '../reducers';

import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { combineLatest, of } from 'rxjs';

import { FitmentService } from '../fitment.service';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class FitmentEffects {
  constructor(
    private actions$: Actions,
    private fitmentService: FitmentService,
    private store: Store
  ) {}

  fetchYears$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(VehicleActions.YEAR_FETCH_START),
      exhaustMap((action) =>
        this.fitmentService.getYears().pipe(
          map((data) => {
            if (data['success']) {
              return VehicleActions.YEAR_FETCH_SUCCESS({ data });
            } else {
              return VehicleActions.YEAR_FETCH_ERROR({ error: data['status'] });
            }
          }),
          catchError((error) =>
            of(VehicleActions.YEAR_FETCH_ERROR({ error: error['message'] }))
          )
        )
      )
    );
  });

  fetchMakes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(VehicleActions.MAKE_FETCH_START),
      concatLatestFrom(() => this.store.select(fromFitment.selectVehicleYear)),
      exhaustMap(([action, year]) =>
        this.fitmentService.getMakes(year).pipe(
          map((data) => {
            if (data['success']) {
              return VehicleActions.MAKE_FETCH_SUCCESS({ data });
            } else {
              return VehicleActions.MAKE_FETCH_ERROR({ error: data['status'] });
            }
          }),
          catchError((error) =>
            of(VehicleActions.MAKE_FETCH_ERROR({ error: error['message'] }))
          )
        )
      )
    );
  });

  fetchModels$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(VehicleActions.MODEL_FETCH_START),
      concatLatestFrom(() =>
        combineLatest([
          this.store.select(fromFitment.selectVehicleYear),
          this.store.select(fromFitment.selectVehicleMake),
        ])
      ),
      exhaustMap(([action, [year, make]]) =>
        this.fitmentService.getModels(year, make).pipe(
          map((data) => {
            if (data['success']) {
              return VehicleActions.MODEL_FETCH_SUCCESS({ data });
            } else {
              return VehicleActions.MODEL_FETCH_ERROR({
                error: data['status'],
              });
            }
          }),
          catchError((error) =>
            of(VehicleActions.MODEL_FETCH_ERROR({ error: error['message'] }))
          )
        )
      )
    );
  });

  fetchTrims$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(VehicleActions.TRIM_FETCH_START),
      concatLatestFrom(() =>
        combineLatest([
          this.store.select(fromFitment.selectVehicleYear),
          this.store.select(fromFitment.selectVehicleMake),
          this.store.select(fromFitment.selectVehicleModel),
        ])
      ),
      exhaustMap(([action, [year, make, model]]) =>
        this.fitmentService.getTrims(year, make, model).pipe(
          map((data) => {
            if (data['success']) {
              return VehicleActions.TRIM_FETCH_SUCCESS({ data });
            } else {
              return VehicleActions.TRIM_FETCH_ERROR({ error: data['status'] });
            }
          }),
          catchError((error) =>
            of(VehicleActions.TRIM_FETCH_ERROR({ error: error['message'] }))
          )
        )
      )
    );
  });


  fetchTires$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(VehicleActions.TIRE_FETCH_START),
      concatLatestFrom(() =>
        combineLatest([
          this.store.select(fromFitment.selectVehicleYear),
          this.store.select(fromFitment.selectVehicleMake),
          this.store.select(fromFitment.selectVehicleModel),
          this.store.select(fromFitment.selectVehicleTrim),
        ])
      ),
      exhaustMap(([action, [year, make, model, trim]]) =>
        this.fitmentService.getTires(year, make, model, trim).pipe(
          map((data) => {            
              return VehicleActions.TIRE_FETCH_SUCCESS({ data });          
          }),
          catchError((error) =>
            of(VehicleActions.TIRE_FETCH_ERROR({ error: error['message'] }))
          )
        )
      )
    );
  });  

  setYearEffect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(VehicleActions.YEAR_SELECTED),
        concatLatestFrom(() => this.store.select(fromFitment.selectError)),
        tap(([action, error]) => {
          if (action.value) {
            this.store.dispatch(VehicleActions.MAKE_FETCH_START());
          } else {
            if (error && !action.value) {
              this.store.dispatch(VehicleActions.YEAR_FETCH_START());
            }
          }
        })
      );
    },
    { dispatch: false }
  );

  setMakeEffect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(VehicleActions.MAKE_SELECTED),
        tap((action) => {
          if (action.value)
            this.store.dispatch(VehicleActions.MODEL_FETCH_START());
        })
      );
    },
    { dispatch: false }
  );

  setModelEffect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(VehicleActions.MODEL_SELECTED),
        tap((action) => {
          if (action.value)
            this.store.dispatch(VehicleActions.TRIM_FETCH_START());
        })
      );
    },
    { dispatch: false }
  );

  setTrimEffect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(VehicleActions.TRIM_SELECTED),
        tap((action) => {
          if (action.value)
            this.store.dispatch(VehicleActions.TIRE_FETCH_START());
        })
      );
    },
    { dispatch: false }
  );  
}
