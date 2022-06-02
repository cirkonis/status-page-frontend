import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StatusPageComponent } from './status-page/status-page.component';
import { HeaderComponent } from './status-page/header/header.component';
import { FooterComponent } from './status-page/footer/footer.component';
import { StatusTableComponent } from './status-page/status-table/status-table.component';
import { UnmonitoredIconComponent } from './icons/unmonitored-icon.component';
import { HealthyIconComponent} from "./icons/healthy-icon.component";
import { InfoIconComponent } from './icons/info-icon.component';
import { WarningIconComponent } from './icons/warning-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusPageComponent,
    HeaderComponent,
    FooterComponent,
    StatusTableComponent,
    UnmonitoredIconComponent,
    HealthyIconComponent,
    InfoIconComponent,
    WarningIconComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
