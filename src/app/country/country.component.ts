import { Component, OnInit, Input } from '@angular/core';
//import countries from '../_data/OGdata.json';
import { Country } from '../country';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  @Input() country: Country;
  //public countryList:Country[] = countries;

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.countryService.getCountry(id)
        .subscribe(country => this.country = country);
  }
  
}
