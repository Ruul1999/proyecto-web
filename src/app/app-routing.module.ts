import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // {path: 'loginUser', component: LoginComponent },
  // { path: '',   redirectTo: 'loginUser', pathMatch: 'full' },
  // { path: '**',   redirectTo: 'loginUser', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
