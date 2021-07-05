import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeedListComponent } from './deed-list/deed-list.component';
import { LoginComponent} from './login/login.component';

const routes: Routes = [
  { path: 'login',    component: LoginComponent },
  { path: 'deedList', component: DeedListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
