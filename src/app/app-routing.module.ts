import { ClienteDetailsComponent } from './cliente-details/cliente-details.component';
import { CreateClienteComponent } from './create-cliente/create-cliente.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteUpdateComponent } from './cliente-update/cliente-update.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: 'clientes', component: ClienteListComponent },
  { path: 'add', component: CreateClienteComponent },
  { path: 'update/:id', component: ClienteUpdateComponent },
  { path: 'details/:id', component: ClienteDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }