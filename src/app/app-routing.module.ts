import { RegisterModule } from './pages/register/register.module';
import { RegisterComponent } from './pages/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('src/app/pages/heroes-home/heroes-home.module').then(m => m.HeroesHomeModule),
  },
  {
    path: 'heroes-list',
    loadChildren: () => import('src/app/pages/heroes-list/heroes-list.module').then(m => m.HeroesListModule),

  },
  {
    path: 'home',
    loadChildren: () => import('src/app/pages/heroes-home/heroes-home.module').then(m => m.HeroesHomeModule),

  },

  {
    path: 'create-hero',
    loadChildren: () => import('src/app/pages/heroes-form/heroes-form.module').then(m => m.HeroesFormModule),

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



  // {
  //   path: 'list/:id',
  //   loadChildren: () => import('src/app/pages/heroe-detail/heroe-detail.module').then(m => m.HeroeDetailModule),
  // },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
