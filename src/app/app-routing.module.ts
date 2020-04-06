import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GeoTestComponent } from './geo-test/geo-test.component';
import { MapComponent } from './map/map.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryComponent } from './country/country.component';
import { DisciplinesComponent } from './disciplines/disciplines.component';
import { DisciplineComponent } from './discipline/discipline.component';
import { GamesComponent } from './games/games.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'geo-test', component: GeoTestComponent},
  { path: 'map', component: MapComponent},
  { path: 'countries', component: CountriesComponent},
  { path: 'country/:id', component:CountryComponent},
  { path: 'disciplines', component:DisciplinesComponent},
  { path: 'discipline/:id', component:DisciplineComponent},
  { path: 'games', component:GamesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
