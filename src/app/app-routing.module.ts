import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: '/fitment', pathMatch: 'full' },
  {
    path: 'fitment',
    loadChildren: () =>
      import('./fitment/fitment.module').then((m) => m.FitmentModule),
  },
  { path: '**', redirectTo: '/fitment' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
