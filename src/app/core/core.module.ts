import { HeroService } from 'src/app/core/services/hero.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,

  ],
  providers: [
    HeroService,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
  ],

  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
