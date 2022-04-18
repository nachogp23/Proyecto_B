import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

import { Hero } from '../services/models/hero.models'
import { HeroService } from 'src/app/core/services/hero.service'

@Injectable({
  providedIn: 'root'
})
export class HeroesRequestResolver implements Resolve<Hero[]> {

  constructor (private heroService: HeroService)  {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Hero[]> {
    console.log("Executing HeroesRequestResolver...")
    return this.heroService.getHeroes();
  }
}


//   // Underdtanding resolvers...

// export class HeroesRequestResolver implements Resolve<string> {

//   constructor () {}

//   public randomData: string = "Devuelto por Resolver";

//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): string {
//     console.log("Executing HeroesRequestResolver...")
//     return this.randomData;
//   }


//   }

