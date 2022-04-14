import { Component, OnInit } from '@angular/core';
import { Hero } from '../../core/services/models/hero.models';
import { HeroService } from 'src/app/core/services/hero.service';
import { ActivatedRoute } from '@angular/router';
//import { debounce } from 'rxjs';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {

  public heroes: Hero[] = [];
  public enableHeroEdit: boolean = false;
  public filterValue: string = '';
  public heroesToShow: boolean = true;

  constructor(
    private heroService: HeroService,
    private activatedRoute: ActivatedRoute,
  ) {
    console.log('Me he construido');
    console.log(this.activatedRoute.snapshot.data);
    this.heroes = this.activatedRoute.snapshot.data[0];
    console.log(this.activatedRoute);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  public modifyHeroes() {
    this.enableHeroEdit = !this.enableHeroEdit;
  }

  public deleteParentHero(id: string) {
    this.heroService.deleteHero(id).subscribe((res) => {
      console.log(res);
      this.getHeroes();
     // if (!this.heroes.length) {console.log("no heroes to show");}
    });
  }

  public getHeroes() {
    this.heroService.getHeroes().subscribe((heroes) => {
      console.log(heroes);
      this.heroes = heroes;
      if (!this.heroes.length) {
        this.heroesToShow = false;
        //console.log("no heroes to show");
        alert("NO HEROES TO SHOW");
      }

    });
  }

}
