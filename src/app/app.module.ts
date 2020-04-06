import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';



import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { GeoTestComponent } from './geo-test/geo-test.component';
import { MapComponent } from './map/map.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryComponent } from './country/country.component';
import { DisciplineComponent } from './discipline/discipline.component';
import { DisciplinesComponent } from './disciplines/disciplines.component';
import { GamesComponent } from './games/games.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    GeoTestComponent,
    MapComponent,
    CountriesComponent,
    CountryComponent,
    DisciplineComponent,
    DisciplinesComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { } 