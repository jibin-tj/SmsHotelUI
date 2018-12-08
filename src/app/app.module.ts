import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { HotelService } from './hotel-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    HttpModule,
    CalendarModule
  ],
  providers: [HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
