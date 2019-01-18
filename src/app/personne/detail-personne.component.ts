import { Component, OnInit } from '@angular/core';
import { Personne, PERSONNES } from '../shared/model.personne';
import { ActivatedRoute } from '@angular/router';
import { PersonneService } from './personne.service';

@Component({
    selector: 'detail-personne',
    templateUrl: './detail-personne.component.html',
    styleUrls: ['./detail-personne.component.css']
})
export class DetailPersonneComponent implements OnInit {
    personne: Personne = null;
    personnes: Personne[] = null;

    constructor(
        private route: ActivatedRoute,
        private personneService: PersonneService
    ) { }

    ngOnInit(): void {
        // this.personnes = this.personneService.getAllPerson();

        let id = +this.route.snapshot.params['id'];
        this.personne = this.personneService.getOne(id);
    }
}
