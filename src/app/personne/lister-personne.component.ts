import { Component, OnInit } from '@angular/core';
import { Personne, PERSONNES } from '../shared/model.personne';
import { Router } from '@angular/router';
import { PersonneService } from './personne.service';

@Component({
    selector: 'liste-personne',
    templateUrl: './lister-personne.component.html',
    styleUrls: ['./lister-personne.component.css']
})
export class ListePersonneComponent implements OnInit {
    personnes: Personne[] = null;
    
    constructor(
        private router:Router,
        private personneService:PersonneService
        ) { }

    ngOnInit(): void {
        this.personnes = this.personneService.getAllPerson();
     }

     selectAPerson(personne: Personne): void {
        console.log(personne);
        this.router.navigate(['personne', personne.id]);
      }

      value: string;
      change(value: string) { 
          this.value = value;
      }
}
