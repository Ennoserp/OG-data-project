import { Injectable } from '@angular/core';
import { Country } from './country';
import { COUNTRIES } from './_data/countryData';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor() { }

  getCountries(): Observable<Country[]> {
    return of(COUNTRIES);
  }

  getCountry(id: number): Observable<Country> {
    // TODO: send the message _after_ fetching the hero
    return of(COUNTRIES.find(country => country.id === id));
  }
}
