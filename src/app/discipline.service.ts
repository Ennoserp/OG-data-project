import { Injectable } from '@angular/core';
import { Discipline } from './discipline';
import { DISCIPLINES } from './_data/disciplineData';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisciplineService {

  constructor() { }

  getDisciplines(): Observable<Discipline[]> {
    return of(DISCIPLINES);
  }
}
