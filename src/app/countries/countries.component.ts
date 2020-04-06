import { Component, OnInit } from '@angular/core';
//import countries from '../_data/OGdata.json';
import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  //public countryList:Country[] = countries;
  countries: Country[];
  selectedCountry: Country;

  constructor(
    private countryService: CountryService,
  ) {}

  ngOnInit() {
    this.getCountries();
  }

  onSelect(country: Country): void {
    this.selectedCountry = country;
  }

  getCountries(): void {
    this.countryService.getCountries()
        .subscribe(countries => this.countries = countries);
  }

}
