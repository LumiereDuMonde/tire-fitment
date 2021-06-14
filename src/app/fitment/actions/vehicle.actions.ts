import { createAction, props } from '@ngrx/store';

import { FitmentResponse } from '../models/fitmentResponse.model';

const namespace = '[Vehicle] ';

export const YEAR_FETCH_START = createAction(namespace + 'Year Start');

export const YEAR_FETCH_SUCCESS = createAction(
  namespace + 'Year Success',
  props<{ data: FitmentResponse }>()
);

export const YEAR_SELECTED = createAction(
  namespace + 'Year Selected',
  props<{ value: string }>()
);

export const YEAR_FETCH_ERROR = createAction(
  namespace + 'Year Failure',
  props<{ error: string }>()
);

export const MAKE_FETCH_START = createAction(namespace + 'Make Start');

export const MAKE_FETCH_SUCCESS = createAction(
  namespace + 'Make Success',
  props<{ data: FitmentResponse }>()
);

export const MAKE_SELECTED = createAction(
  namespace + 'Make Selected',
  props<{ value: string }>()
);

export const MAKE_FETCH_ERROR = createAction(
  namespace + 'Make Failure',
  props<{ error: string }>()
);

export const MODEL_FETCH_START = createAction(namespace + 'Model Start');

export const MODEL_FETCH_SUCCESS = createAction(
  namespace + 'Model Success',
  props<{ data: FitmentResponse }>()
);

export const MODEL_SELECTED = createAction(
  namespace + 'Model Selected',
  props<{ value: string }>()
);

export const MODEL_FETCH_ERROR = createAction(
  namespace + 'Model Failure',
  props<{ error: string }>()
);

export const TRIM_FETCH_START = createAction(namespace + 'Trim Start');

export const TRIM_FETCH_SUCCESS = createAction(
  namespace + 'Trim Success',
  props<{ data: FitmentResponse }>()
);

export const TRIM_SELECTED = createAction(
  namespace + 'Trim Selected',
  props<{ value: string }>()
);

export const TRIM_FETCH_ERROR = createAction(
  namespace + 'Trim Failure',
  props<{ error: string }>()
);
