import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReviewComponent } from './review/review.component';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { ItemsComponent } from './items/items.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    ReviewComponent,
    CartComponent,
    DetailsComponent,
    LoginComponent,
    ItemsComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
