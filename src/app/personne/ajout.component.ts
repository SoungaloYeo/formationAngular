import { Component, OnInit } from '@angular/core';
import { Personne } from '../shared/model.personne';
import { PersonneService } from './personne.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {
  personne: Personne;

  constructor(
    private personneService: PersonneService,
    private route: Router) { }

  ngOnInit() {
    this.personne = new Personne();
  }

  onSubmit(): void {
    this.personne.id = this.personneService.getAllPerson().length + 1;
    this.personneService.addPerson(this.personne);
    this.route.navigate(['/personnes']);
  }

}
