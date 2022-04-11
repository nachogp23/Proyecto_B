import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesHomeRoutingModule } from './heroes-home-routing.module';
import { HeroesHomeComponent } from './heroes-home.component';


@NgModule({
  declarations: [
    HeroesHomeComponent
  ],
  imports: [
    CommonModule,
    HeroesHomeRoutingModule
  ]
})
export class HeroesHomeModule { }
