import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SecurityComponent } from './security/security.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { FabricanteFormComponent } from './fabricante-form/fabricante-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
  { path: 'security', component: SecurityComponent, canActivate: [AuthGuardService] },
  { path: 'fabricante', component: FabricanteFormComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }