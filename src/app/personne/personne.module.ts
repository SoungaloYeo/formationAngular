import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListePersonneComponent } from './lister-personne.component';
import { DetailPersonneComponent } from './detail-personne.component';
import { PersonneRoutingModule } from './personne-routing.module';
import { EditerComponent } from './editer.component';
import { AjoutComponent } from './ajout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonneDbService } from './personne-db.service';
import { LoaderComponent } from './../shared/loader.component';
import { AuthGuard } from '../shared/auth-guard.service';

@NgModule({
    declarations: [
        ListePersonneComponent,
        DetailPersonneComponent,
        AjoutComponent,
        EditerComponent,
        LoaderComponent
    ],
    imports: [ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PersonneRoutingModule 
    ],
    exports: [],
    providers: [
        PersonneDbService,
        AuthGuard
    ],
})
export class PersonneModule {}