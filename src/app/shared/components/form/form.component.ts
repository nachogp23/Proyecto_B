import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";

import { Hero } from "src/app/core/services/models/hero.models";
import { HeroService } from "src/app/core/services/hero.service";
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() public hero?: Hero;

  public createHeroForm?: FormGroup;

  constructor(
    private heroService: HeroService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.createHeroForm = new FormGroup({
      name: new FormControl(this.hero?.name || '', Validators.required),
      hero: new FormControl(this.hero?.hero || '', Validators.required),
      rating: new FormControl(this.hero?.rating || '', [
        Validators.required,
        Validators.maxLength(1),
      ]),
      img: new FormControl(this.hero?.img || '', Validators.required)

    });
  }

  public saveHero(event: Event) {

    console.log(this.createHeroForm?.value);

    event.preventDefault();

    if(this.createHeroForm?.valid) {
     let heroRequest;
     if(this.hero?.id) {
       heroRequest = this.heroService.editHero(this.hero.id, this.createHeroForm.value);
     } else {
       heroRequest= this.heroService.createHero(this.createHeroForm.value);
     }

     heroRequest.subscribe(() => {
       this.router.navigate(['/heroes-list']);
     });

     this.createHeroForm.reset();

    }
  }

}
