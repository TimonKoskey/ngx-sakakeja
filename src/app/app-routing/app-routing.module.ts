import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from '../app.component';
import {LandingPageComponent} from '../landing-page/landing-page.component';
import {SignInComponent} from '../auth/sign-in/sign-in.component';
import {SignUpComponent} from '../auth/sign-up/sign-up.component';

const appRoutes : Routes = [
  { path: '', component: AppComponent,
    children:	[
      { path: 'home', component: LandingPageComponent},
      // {path:'listings/:type', component:PropertyListComponent},
      // {path:'propertydetail/:type', component:PropertyDetailComponent},
      { path: 'sign-in', component: SignInComponent},
      {path: 'sign-up', component: SignUpComponent},
      { path: '',  redirectTo: 'home', pathMatch: 'full' }
    ]},
  // { path: 'account', loadChildren: '../dashboard/dashboard.module', canActivate:	[LoginRouteGuard] }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
