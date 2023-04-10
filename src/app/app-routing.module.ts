import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosComponent } from './empelados/pages/empleados/empleados.component';
import { EmtypagesComponent } from './empelados/pages/emtypages/emtypages.component';
import { LoginComponent } from './login/login.component';
import { MiperfilComponent } from './empelados/pages/miperfil/miperfil.component';

const routes: Routes = [
  { path: 'empleados', component: EmpleadosComponent },
  { path: 'inicio', component: EmtypagesComponent },
  { path: 'miPerfil', component: MiperfilComponent },
  // {path: 'loginUser', component: LoginComponent },
  { path: '',   redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**',   redirectTo: 'inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
