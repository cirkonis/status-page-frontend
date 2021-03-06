import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StatusPageComponent } from './status-page/status-page.component';
import { HeaderComponent } from './status-page/header/header.component';
import { FooterComponent } from './status-page/footer/footer.component';
import { SliStatusTableComponent } from './status-page/sli-status-table/sli-status-table.component';
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
import { TooltipDirective } from './directives/tooltip/tooltip.directive';
import { OverlayModule } from "@angular/cdk/overlay";
import { TooltipComponent } from './directives/tooltip/tooltip.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusPageComponent,
    HeaderComponent,
    FooterComponent,
    SliStatusTableComponent,
    UnmonitoredIconComponent,
    NormalIconComponent,
    InfoIconComponent,
    NoDataIconComponent,
    ErrorIconComponent,
    AlertIconComponent,
    PendingIconComponent,
    TableCellIconComponent,
    TooltipDirective,
    TooltipComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    OverlayModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
