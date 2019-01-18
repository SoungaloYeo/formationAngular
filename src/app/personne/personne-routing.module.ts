import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListePersonneComponent } from './lister-personne.component';
import { DetailPersonneComponent } from './detail-personne.component';
import { AjoutComponent } from './ajout.component';
import { EditerComponent } from './editer.component';

const routes: Routes = [
    {
        path: 'personnes',
        component: ListePersonneComponent
    },
    {
        path: 'personnes/ajout',
        component: AjoutComponent
    },
    {
        path: 'personnes/editer/:id',
        component: EditerComponent
    },
    {
        path: 'personne/:id',
        component: DetailPersonneComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PersonneRoutingModule { }
