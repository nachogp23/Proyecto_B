import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesListRoutingModule } from './heroes-list-routing.module';
import { HeroesListComponent } from './heroes-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeroesListComponent
  ],
  imports: [
    CommonModule,
    HeroesListRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class HeroesListModule { }
