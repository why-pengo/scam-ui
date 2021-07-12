import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeedListComponent } from './deed-list/deed-list.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', component: DeedListComponent, canActivate: [AuthGuard] },
  { path: 'login',    component: LoginComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
