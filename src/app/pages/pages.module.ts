import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NbMenuModule } from "@nebular/theme";
import { ThemeModule } from '../@theme/theme.module';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PaginatorModule } from "../@theme/components/paginator/paginator.module";
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ThemeModule,
    DashboardModule,
    NbMenuModule,
    PaginatorModule,
    PagesRoutingModule
  ],
  declarations: [
    PagesComponent,
    UserComponent,
    ProductComponent,
    UsersComponent,
  ],
  providers: []
})
export class PagesModule { }
