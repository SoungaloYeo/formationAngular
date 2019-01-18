import { Component, OnInit } from '@angular/core';
import { Personne } from '../shared/model.personne';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonneService } from './personne.service';

@Component({
  selector: 'app-editer',
  templateUrl: './editer.component.html',
  styleUrls: ['./editer.component.css']
})
export class EditerComponent implements OnInit {
  personne : Personne;

  constructor(private router: Router,
    private personneService: PersonneService,
    private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
   const id =  +this.activatedRoute.snapshot.params['id'];
   this.personne = this.personneService.getOne(id);
  }

  onEdit(): void {
    this.personneService.updatePerson(this.personne);
    this.router.navigate(['/personnes']);
  }

}
