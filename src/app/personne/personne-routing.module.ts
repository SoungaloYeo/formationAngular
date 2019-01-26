import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListePersonneComponent } from './lister-personne.component';
import { DetailPersonneComponent } from './detail-personne.component';
import { AjoutComponent } from './ajout.component';
import { EditerComponent } from './editer.component';
import { AuthGuard } from '../shared/auth-guard.service';

const routes: Routes = [
    {
        path: 'personne',
        canActivate: [AuthGuard],
        children: [            
                {
                    path: '',
                    redirectTo: 'all',
                    pathMatch: 'full'
                },
                {
                    path: 'all',
                    component: ListePersonneComponent
                },
                {
                    path: 'ajout',
                    component: AjoutComponent
                },
                {
                    path: 'editer/:id',
                    component: EditerComponent
                },
                {
                    path: ':id',
                    component: DetailPersonneComponent
                }
            ]
        }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PersonneRoutingModule { }
