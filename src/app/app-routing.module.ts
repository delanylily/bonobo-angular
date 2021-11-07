import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomPlanComponent } from './custom-plan/custom-plan.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'login',
  //   pathMatch: 'full'
  // },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'custom',
    component: CustomPlanComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, CustomPlanComponent, NavbarComponent]
