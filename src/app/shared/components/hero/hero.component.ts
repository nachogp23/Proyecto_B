import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from 'src/app/core/services/models/hero.models';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  @Input() public hero?: Hero;
  @Input() public enableHeroEdit: boolean = false;
  @Output() public onDeleteHero = new EventEmitter<string>();

  constructor(private router: Router) {
    console.log("Hero-Component se construye");
    console.log(this.hero);
  }

  ngOnInit(): void {
  }

  public deleteHero() {
    if (this.hero) {
      console.log(this.hero.id);
      this.onDeleteHero.emit(this.hero.id);
    }
  }

  public editHero() {
    this.router.navigate(['/edit-form', this.hero?.id]);
  }

}
