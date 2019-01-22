import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListePersonneComponent } from './lister-personne.component';
import { DetailPersonneComponent } from './detail-personne.component';
import { PersonneRoutingModule } from './personne-routing.module';
import { PersonneService } from './personne.service';
import { EditerComponent } from './editer.component';
import { AjoutComponent } from './ajout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonneDbService } from './personne-db.service';

@NgModule({
    declarations: [
        ListePersonneComponent,
        DetailPersonneComponent,
        AjoutComponent,
        EditerComponent,

    ],
    imports: [ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PersonneRoutingModule 
    ],
    exports: [],
    providers: [
        PersonneService,
        PersonneDbService
    ],
})
export class PersonneModule {}