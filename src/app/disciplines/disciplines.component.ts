import { Component, OnInit } from '@angular/core';
import { Discipline } from '../discipline';
import { DisciplineService} from '../discipline.service';

@Component({
  selector: 'app-disciplines',
  templateUrl: './disciplines.component.html',
  styleUrls: ['./disciplines.component.scss']
})
export class DisciplinesComponent implements OnInit {

  disciplines: Discipline[];

  constructor(private disciplineService: DisciplineService) { }

  ngOnInit() {
    this.getDisciplines();
  }

  getDisciplines(): void {
    this.disciplineService.getDisciplines()
        .subscribe(disciplines => this.disciplines = disciplines);
  }

}
