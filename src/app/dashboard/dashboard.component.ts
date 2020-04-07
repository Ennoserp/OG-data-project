import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
import { CountryService } from '../country.service';
import { Discipline } from '../discipline';
import { DisciplineService} from '../discipline.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    
  countries: Country[];
  maxCountries: Country[] = [null];
  scores: number[] = [0];
  disciplines: Discipline[];
  randomDisciplines: Discipline[] = [null];

  constructor(    
    private countryService: CountryService,
    private disciplineService: DisciplineService
  ) { }

  ngOnInit() {
    this.getCountries();
    this.getNMaxCountries(10);

    this.getDisciplines();
    this.getRandomDisciplines(5);
  }


  getCountries(): void {
    this.countryService.getCountries()
        .subscribe(countries => this.countries = countries);
  }

  getNMaxCountries(n: number): void {
    var index = 0, max = 0;
    //on crée un tableau avec les scores pour pouvoir trouver les maxScores
    for (let i = 0; i < this.countries.length; i++) {
      this.scores.push(this.countries[i].gold);
    }
    //recherche des n max
    for (let j = 0; j < n; j++) {
      index = 0, max = 0;
      
      for (let i = 0; i < this.countries.length; i++) {
        if (this.scores[i] > max) {
          max = this.scores[i];
          index = i;
        }
      }
      //remise à zéro et non suppression pour garder les index corrects
      this.scores[index] = 0;

      this.maxCountries.push(this.countries[index-1]);

    }
    //console.log(this.maxCountries);

    this.maxCountries.shift();
  }

  getDisciplines(): void {
    this.disciplineService.getDisciplines()
        .subscribe(disciplines => this.disciplines = disciplines);
  }

  getRandomDisciplines(n: number): void {
    for (let j = 0; j < n; j++) {
      var rand = Math.floor(Math.random()*this.disciplines.length);
      this.randomDisciplines.push(this.disciplines[rand]);
      console.log(rand);
    }
    
    this.randomDisciplines.shift();
  }
}
