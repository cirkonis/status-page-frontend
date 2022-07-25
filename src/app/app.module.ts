import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StatusPageComponent } from './status-page/status-page.component';
import { HeaderComponent } from './status-page/header/header.component';
import { FooterComponent } from './status-page/footer/footer.component';
import { StatusTableComponent } from './status-page/sli-status-table/status-table.component';
import { UnmonitoredIconComponent } from './icons/unmonitored-icon.component';
import { NormalIconComponent} from "./icons/normal-icon.component";
import { InfoIconComponent } from './icons/info-icon.component';
import { NoDataIconComponent } from './icons/no-data-icon.component';
import { ErrorIconComponent } from './icons/error-icon.component';
import { AlertIconComponent } from './icons/alert-icon.component';
import { PendingIconComponent } from "./icons/pending-icon.component";
import { TableCellIconComponent } from './status-page/sli-status-table/table-cell-icon/table-cell-icon.component';
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    StatusPageComponent,
    HeaderComponent,
    FooterComponent,
    StatusTableComponent,
    UnmonitoredIconComponent,
    NormalIconComponent,
    InfoIconComponent,
    NoDataIconComponent,
    ErrorIconComponent,
    AlertIconComponent,
    PendingIconComponent,
    TableCellIconComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
