import "flatpickr/dist/flatpickr.css";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { FlatpickrModule } from "angularx-flatpickr";
import { NgbModalModule } from "@ng-bootstrap/ng-bootstrap/modal/modal.module";

import { AppComponent } from "./app.component";
import { FoxycalendarComponent } from "./foxycalendar/foxycalendar.component";
import { CommonModule } from "@angular/common";
import { CalendarModule } from "angular-calendar";

@NgModule({
  declarations: [AppComponent, FoxycalendarComponent],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    NgbModalModule.forRoot(),
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
