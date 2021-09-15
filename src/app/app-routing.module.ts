import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainDashboardComponent} from './main-dashboard/main-dashboard.component';
import {DashboardComponent} from './code/dashboard/dashboard.component';
import {UnderConstructionComponent} from './v2/under-construction/under-construction.component';
import {CreditsComponent} from './v2/credits/credits.component';
import {HomeComponent} from './v2/home/home.component';
import {WrapperComponent} from './v2/wrapper/wrapper.component';

const routes: Routes = [
  {
    path: 'home',
    component: MainDashboardComponent
  },
  {
    path: 'code',
    component: DashboardComponent // TODO: need to rename component.
  },
  {
    path: 'v2',
    component: WrapperComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'credits', component: CreditsComponent}
    ]
  },
  {
    path: '',
    redirectTo: 'v2',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
