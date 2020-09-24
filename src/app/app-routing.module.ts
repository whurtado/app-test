import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
//import { PeliculaComponent } from './pages/pelicula/pelicula.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'search/:texto',
    component: SearchComponent
  },

  {
    path: 'contact',
     loadChildren: () => import('./pages/contacts/contacts.module').then(m => m.ContactsModule)

  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
