import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from './game';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private gamesUrl = "https://olympics.api.pressassociation.io/v3/games/OWG2018/discipline";

  constructor(private http: HttpClient) { }

  getGames(): Observable<Game[]>{
    return this.http.get<Game[]>(this.gamesUrl)
  }

  getGame(id: number): Observable<Game> {
    const url = `${this.gamesUrl}/${id}`;
    return this.http.get<Game>(url);
  }

}
