import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListePersonneComponent } from './personne/lister-personne.component';
import { DetailPersonneComponent } from './personne/detail-personne.component';
import { NotFoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { 
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { 
    path: 'home',
    component: HomeComponent
  },
  { 
    path: '**',
    component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
