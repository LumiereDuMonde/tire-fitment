import * as VehicleActions from '../actions/vehicle.actions';

import { Action, createReducer, on } from '@ngrx/store';

import { Tire } from '../models/tire.model';

export const vehicleFeatureKey = 'vehicles';

export interface State {
  years: string[];
  makes: string[];
  models: string[];
  trims: string[];
  error: string;
  loading: boolean;
  year: string;
  make: string;
  model: string;
  trim: string;
  tires: Tire[]
}

const initialState: State = {
  years: [],
  makes: [],
  models: [],
  trims: [],
  loading: false,
  error: null,
  year: null,
  make: null,
  model: null,
  trim: null,
  tires: []
};

export const fitmentReducer = createReducer(
  initialState,
  on(
    VehicleActions.TRIM_FETCH_START,
    VehicleActions.YEAR_FETCH_START,
    VehicleActions.MODEL_FETCH_START,
    VehicleActions.MAKE_FETCH_START,
    VehicleActions.TIRE_FETCH_START,
    (state) => ({ ...state, loading: true, error: null })
  ),
  on(VehicleActions.MAKE_FETCH_SUCCESS, (state, action) => ({
    ...state,
    makes: [...action.data.make],
    loading: false,
  })),
  on(VehicleActions.YEAR_FETCH_SUCCESS, (state, action) => ({
    ...state,
    years: [...action.data.year],
    loading: false,
  })),
  on(VehicleActions.MODEL_FETCH_SUCCESS, (state, action) => ({
    ...state,
    models: [...action.data.model],
    loading: false,
  })),
  on(VehicleActions.TRIM_FETCH_SUCCESS, (state, action) => ({
    ...state,
    trims: [...action.data.trim],
    loading: false,
  })),
  on(VehicleActions.TIRE_FETCH_SUCCESS, (state, action) => ({
    ...state,
    tires: [...action.data],
    loading: false,
  })),  
  on(VehicleActions.MAKE_SELECTED, (state, action) => ({
    ...state,
    make: action.value,
  })),
  on(VehicleActions.MODEL_SELECTED, (state, action) => ({
    ...state,
    model: action.value,
  })),
  on(VehicleActions.YEAR_SELECTED, (state, action) => ({
    ...state,
    year: action.value,
  })),
  on(VehicleActions.TRIM_SELECTED, (state, action) => ({
    ...state,
    trim: action.value,
  })),
  on(
    VehicleActions.MAKE_FETCH_ERROR,
    VehicleActions.MODEL_FETCH_ERROR,
    VehicleActions.TRIM_FETCH_ERROR,
    VehicleActions.YEAR_FETCH_ERROR,
    VehicleActions.TIRE_FETCH_ERROR,
    (state, action) => ({ ...state, error: action.error, loading: false })
  )
);
export function reducer(state: State | undefined, action: Action) {
  return fitmentReducer(state, action);
}

export const getYear = (state: State) => state.year;
export const getMake = (state: State) => state.make;
export const getModel = (state: State) => state.model;
export const getTrim = (state: State) => state.trim;
export const getYears = (state: State) => state.years;
export const getMakes = (state: State) => state.makes;
export const getModels = (state: State) => state.models;
export const getTrims = (state: State) => state.trims;
export const getError = (state: State) => state.error;
export const getLoading = (state: State) => state.loading;
export const getTires = (state: State) => state.tires;

