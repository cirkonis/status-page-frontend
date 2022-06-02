import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StatusPageComponent } from './status-page/status-page.component';
import { HeaderComponent } from './status-page/header/header.component';
import { FooterComponent } from './status-page/footer/footer.component';
import { StatusTableComponent } from './status-page/status-table/status-table.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusPageComponent,
    HeaderComponent,
    FooterComponent,
    StatusTableComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
