import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TransportComponent } from './transport/transport.component';
import { TransportAddComponent } from './transport-add/transport-add.component';
import { TransportEditComponent } from './transport-edit/transport-edit.component';

const routes: Routes = [
  {
    path: '',
    component: TransportComponent
  },
  {
    path: 'new',
    component: TransportAddComponent
  },
  {
    path: ':id/edit',
    component: TransportEditComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
