import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersTTComponent } from './components/orders-tt/orders-tt.component';
import { OrdersDetailsTTComponent } from './components/orders-details-tt/orders-details-tt.component';
import { OrdersItemTTComponent } from './components/orders-item-tt/orders-item-tt.component';
import { HttpClientModule } from '@angular/common/http';
import { TTDataService } from './services/tt-data.service';

@NgModule({
  declarations: [
    AppComponent,
    OrdersTTComponent,
    OrdersDetailsTTComponent,
    OrdersItemTTComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    TTDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
