import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesFormRoutingModule } from './heroes-form-routing.module';
import { HeroesFormComponent } from './heroes-form.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    HeroesFormComponent
  ],
  imports: [
    CommonModule,
    HeroesFormRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
  ]
})
export class HeroesFormModule { }
