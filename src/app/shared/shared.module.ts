import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FilterHeroesPipe } from './pipes/filter-heroes.pipe';
import { FlipCardComponent } from './components/flip-card/flip-card.component';
import  { FlipCardFrontComponent } from './components/flip-card/flip-card-front'
import  { FlipCardBackComponent } from './components/flip-card/flip-card-back'


@NgModule({
  declarations: [
    HeroComponent,
    FormComponent,
    FilterHeroesPipe,
    FlipCardComponent,
    FlipCardFrontComponent,
    FlipCardBackComponent


  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  exports: [
    HeroComponent,
    FilterHeroesPipe,
    FormComponent,
    FlipCardComponent,
    FlipCardFrontComponent,
    FlipCardBackComponent
  ]
})
export class SharedModule { }
