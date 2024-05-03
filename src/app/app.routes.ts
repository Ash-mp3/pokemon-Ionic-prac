import { Routes } from '@angular/router';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'details', component:  PokemonDetailsComponent}
];
