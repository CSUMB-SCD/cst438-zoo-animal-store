import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { ItemsComponent } from './items/items.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'items',
    component: ItemsComponent
  },
  {
    path: 'details/:name',
    component: DetailsComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
