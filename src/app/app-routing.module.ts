import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreshInstallComponent } from './fresh-install/fresh-install.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'fresh' },
  { path: 'fresh', component: FreshInstallComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
