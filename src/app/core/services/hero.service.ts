import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Hero } from './models/hero.models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private httpClient: HttpClient) {}

  public getHeroes(): Observable<Hero[]> {
    return this.httpClient.get(
      `${environment.jsonServerApiUrl}heroes`
    ) as Observable<Hero[]>;
  }

  public getHeroById(id: string): Observable<Hero> {
    return this.httpClient.get<Hero>(
      `${environment.jsonServerApiUrl}heroes/${id}`
    ) as Observable<Hero>;
  }

  public deleteHero(id: string): Observable<Hero> {
    return this.httpClient.delete(
      `${environment.jsonServerApiUrl}heroes/${id}`
    ) as Observable<Hero>;
  }
  public createHero(hero: Hero): Observable<Hero> {
    return this.httpClient.post(
      `${environment.jsonServerApiUrl}heroes`,
      hero
    ) as Observable<Hero>;
  }
  public editHero(id: string, body: Hero) {
    return this.httpClient.put(
      `${environment.jsonServerApiUrl}heroes/${id}`,
      body
    ) as Observable<Hero>;
  }
}
