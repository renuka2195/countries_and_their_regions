import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatToolbarModule, MatIconBase, MatIconModule, MatCardModule, MatSelectModule, MatListModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { RegionsCountriesComponent } from './components/regions-countires/regions-countires.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainBodyComponent } from './components/main-body/main-body.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';

@NgModule({
  declarations: [
    AppComponent,
    RegionsCountriesComponent,
    HeaderComponent,
    MainBodyComponent,
    CountryDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    HttpClientModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
