import { Component, OnInit } from '@angular/core';
import { Personne } from '../shared/model.personne';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonneDbService } from './personne-db.service';

@Component({
    selector: 'detail-personne',
    templateUrl: './detail-personne.component.html',
    styleUrls: ['./detail-personne.component.css']
})
export class DetailPersonneComponent implements OnInit {
    public personne: Personne = null;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        // private personneService: PersonneService,
        private personneDbService: PersonneDbService) {
    }

    ngOnInit(): void {
        let id = +this.route.snapshot.params['id'];

        this.personneDbService.getOnePersonne(id).subscribe(
            res => {
                this.personne = res;
            },
            err => {
                alert('error');
            });
    }

    editAPerson(): void {
        this.router.navigate(['personne/editer', this.personne.id]);
    }

    deleteAPerson(): void {
        if (window.confirm('êtes-vous sure de vouloir suprimer ?')) {
            this.personneDbService.deletePersonne(this.personne).subscribe(
                _ => {
                    this.router.navigate(['/personnes'])
                }
            );
        }
    }
}
