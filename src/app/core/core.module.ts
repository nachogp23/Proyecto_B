import { AuthService } from 'src/app/core/services/auth.service';
import { HeroService } from 'src/app/core/services/hero.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { AuthInterceptor } from './interceptors/auth.interceptor';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,

  ],
  providers: [
    HeroService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
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
