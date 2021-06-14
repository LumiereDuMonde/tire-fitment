import { RouterModule, Routes } from '@angular/router';

import { FitmentComponent } from './fitment.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path: '', component: FitmentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FitmentRoutingModule { }
