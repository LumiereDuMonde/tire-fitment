import * as fromRoot from '../../store/reducers/index';
import * as fromVehicles from './vehicles.reducer';

import {
  Action,
  combineReducers,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

export const fitmentFeatureKey = 'fitment';

export interface FitmentState {
  [fromVehicles.vehicleFeatureKey]: fromVehicles.State;
}

export interface State extends fromRoot.State {
  [fitmentFeatureKey]: FitmentState;
}

/** Provide reducer in AoT-compilation happy way */
export function reducers(state: FitmentState | undefined, action: Action) {
  return combineReducers({
    [fromVehicles.vehicleFeatureKey]: fromVehicles.reducer,
  })(state, action);
}

export const selectFitmentState =
  createFeatureSelector<State, FitmentState>(fitmentFeatureKey);

// vehicles
export const selectVehicleState = createSelector(
  selectFitmentState,
  (state) => state.vehicles
);

export const selectVehicleYears = createSelector(
  selectVehicleState,
  fromVehicles.getYears
);

export const selectVehicleMakes = createSelector(
  selectVehicleState,
  fromVehicles.getMakes
);

export const selectVehicleModels = createSelector(
  selectVehicleState,
  fromVehicles.getModels
);

export const selectVehicleTrim = createSelector(
  selectVehicleState,
  fromVehicles.getTrim
);

export const selectVehicleYear = createSelector(
  selectVehicleState,
  fromVehicles.getYear
);

export const selectVehicleMake = createSelector(
  selectVehicleState,
  fromVehicles.getMake
);

export const selectVehicleModel = createSelector(
  selectVehicleState,
  fromVehicles.getModel
);

export const selectVehicleTrims = createSelector(
  selectVehicleState,
  fromVehicles.getTrims
);

export const selectLoadingStatus = createSelector(
  selectVehicleState,
  fromVehicles.getLoading
);

export const selectError = createSelector(
  selectVehicleState,
  fromVehicles.getError
);
