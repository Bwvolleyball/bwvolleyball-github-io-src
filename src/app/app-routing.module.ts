import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainDashboardComponent} from './main-dashboard/main-dashboard.component';
import {DashboardComponent} from './code/dashboard/dashboard.component';
import {BlogComponent} from './blog/blog.component';


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
    path: 'blog',
    component: BlogComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
