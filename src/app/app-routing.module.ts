import { HeroesListComponent } from './pages/heroes-list/heroes-list.component';
import { HeroesRequestResolver } from './core/resolvers/heroes-request.resolver';
import { AuthUserGuard } from './core/guards/auth-user.guard';
import { ExitValidationGuard } from './core/guards/exit-validation.guard'
import { RegisterModule } from './pages/register/register.module';
import { RegisterComponent } from './pages/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('src/app/pages/heroes-home/heroes-home.module').then(m => m.HeroesHomeModule),
  },
  {
    path: 'heroes-list',
    loadChildren: () => import('src/app/pages/heroes-list/heroes-list.module').then(m => m.HeroesListModule),
    resolve: [HeroesRequestResolver]
  },
  {
    path: 'home',
    loadChildren: () => import('src/app/pages/heroes-home/heroes-home.module').then(m => m.HeroesHomeModule),

  },
  {
    path: 'create-hero',
    loadChildren: () => import('src/app/pages/heroes-form/heroes-form.module').then(m => m.HeroesFormModule),
    canDeactivate: [ExitValidationGuard]

  },
  {
    path: 'edit-form/:id',
    loadChildren: () => import('src/app/pages/edit-hero/edit-hero.module').then(m => m.EditHeroModule)
  },
  {
    path: 'register',
    loadChildren: () => import('src/app/pages/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'login',
    loadChildren: () => import('src/app/pages/login/login.module').then(m => m.LoginModule)
  },

  {
    path: 'my-account',
    loadChildren: () => import('src/app/pages/my-account/my-account.module').then(m => m.MyAccountModule),
    canActivate: [AuthUserGuard]
  },



  // {
  //   path: 'list/:id',
  //   loadChildren: () => import('src/app/pages/heroe-detail/heroe-detail.module').then(m => m.HeroeDetailModule),
  // },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthUserGuard,
    ExitValidationGuard,
    HeroesRequestResolver
  ]
})
export class AppRoutingModule { }
