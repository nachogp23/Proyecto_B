import { Component, OnInit } from '@angular/core';
import { Hero } from '../../core/services/models/hero.models';
import { HeroService } from 'src/app/core/services/hero.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
})
export class HeroesListComponent implements OnInit {
  public heroes: Hero[] = [];
  public enableHeroEdit: boolean = false;
  public filterValue: string = '';
  public heroesToShow: boolean = true;
  public activateExpandBut: boolean = false;
  public activateConstrainBut = false;
  public expandList: boolean = false;

  constructor(
    private heroService: HeroService,
    private activatedRoute: ActivatedRoute
  ) {
    this.heroes = this.activatedRoute.snapshot.data[0];
  }

  ngOnInit(): void {
    if (this.heroes.length > 3) {
      this.activateExpandBut = true;
      console.log(this.activateExpandBut);
    } else {
      this.activateExpandBut = false;
    }
  }

  public modifyHeroes() {
    this.enableHeroEdit = !this.enableHeroEdit;
  }

  public deleteParentHero(id: string) {
    this.heroService.deleteHero(id).subscribe((res) => {
      console.log(res);
      this.getHeroes();
    });
  }

  public getHeroes() {
    this.heroService.getHeroes().subscribe((heroes) => {
      console.log(heroes);
      this.heroes = heroes;

      if (!this.heroes.length) {
        this.heroesToShow = false;
        alert('NO HEROES TO SHOW');
      }
    });
  }

  public showMore() {
    this.expandList = true;
    this.activateExpandBut = false;
    this.activateConstrainBut = true;
  }

  public showLess() {
    this.expandList = false;
    this.activateExpandBut = true;
    this.activateConstrainBut = false;
  }
}
