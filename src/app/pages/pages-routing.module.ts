import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PagesComponent} from './pages.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {OderlistComponent} from "./orderlist/orderlist.component";
import {AddorderComponent} from "./addorder/addorder.component";


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
      data: {breadcrumb: 'Dashboard'},
    },
    {
      path: 'oderlist',
      component: OderlistComponent,
      data: {breadcrumb: 'Oder List'},
    },
    {
      path: 'addoder',
      component: AddorderComponent,
      data: {breadcrumb: 'Add Order'},
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
