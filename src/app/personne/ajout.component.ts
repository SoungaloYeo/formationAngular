import { Component, OnInit } from '@angular/core';
import { Personne } from '../shared/model.personne';
import { PersonneService } from './personne.service';
import { Router } from '@angular/router';
import { PersonneDbService } from './personne-db.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {
  personne: Personne;
  private personnes: Personne[];

  constructor(
    private route: Router,
    private personneDbService: PersonneDbService) { }

  ngOnInit() {
    this.personne = new Personne();
    this.personneDbService.getAllPersonnes().subscribe(
      listPerson => {
        this.personnes = listPerson;
      }
    );
  }

  onSubmit(): void {
    let id = this.personnes.length + 1;
    this.personne.id = id;
    this.personneDbService.addOnePersonne(this.personne).subscribe(
      perso => {
        console.log(perso);
      }
    );
    this.route.navigate(['/personne']);
  }
}
