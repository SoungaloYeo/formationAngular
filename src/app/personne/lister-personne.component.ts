import { Component, OnInit } from '@angular/core';
import { Personne, PERSONNES } from '../shared/model.personne';
import { Router } from '@angular/router';
import { PersonneDbService } from './personne-db.service';

@Component({
    selector: 'liste-personne',
    templateUrl: './lister-personne.component.html',
    styleUrls: ['./lister-personne.component.css']
})
export class ListePersonneComponent implements OnInit {

    public personnes: Personne[];
    private dateObj: number;

    constructor(
        private personneBdService: PersonneDbService) { }

    ngOnInit(): void {
        this.listePersonnes();
    }

    listePersonnes(): void {
        this.personneBdService.getAllPersonnes().subscribe(
            dataPersonnes => {
                this.personnes = dataPersonnes;
            },
            err => {
                alert('error');
            });
    }

    deletePerson(person: Personne): void {
        if (window.confirm('êtes-vous sure de vouloir suprimer ?')) {
            this.personneBdService.deletePersonne(person).subscribe(
                _ => {
                    this.listePersonnes();
                }
            );
        }
    }


    value: string;
    change(value: string) {
        this.value = value;
    }
}
