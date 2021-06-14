import * as fromFitment from './reducers';

import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { BreadcumbContainerComponent } from './containers/breadcumb-container/breadcumb-container.component';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { FitmentComponent } from './fitment.component';
import { FitmentEffects } from './effects/fitment.effects';
import { FitmentRoutingModule } from './fitment-routing.module';
import { NgModule } from '@angular/core';
import { ReactiveComponentModule } from '@ngrx/component';
import { StoreModule } from '@ngrx/store';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { VehicleContainerComponent } from './containers/vehicle-container/vehicle-container.component';
import { TireComponent } from './components/tire/tire.component';
import { TireContainerComponent } from './containers/tire-container/tire-container.component';

@NgModule({
  declarations: [
    FitmentComponent,
    BreadcumbContainerComponent,
    BreadcrumbComponent,
    VehicleComponent,
    VehicleContainerComponent,
    TireComponent,
    TireContainerComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromFitment.fitmentFeatureKey, fromFitment.reducers),
    EffectsModule.forFeature([FitmentEffects]),
    FitmentRoutingModule,
    ReactiveComponentModule,
  ],
})
export class FitmentModule {}
