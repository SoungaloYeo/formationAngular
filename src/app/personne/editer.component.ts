import { Component, OnInit } from '@angular/core';
import { Personne } from '../shared/model.personne';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonneDbService } from './personne-db.service';

@Component({
  selector: 'app-editer',
  templateUrl: './editer.component.html',
  styleUrls: ['./editer.component.css']
})
export class EditerComponent implements OnInit {
  public personne: Personne = null;

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private personneDbService: PersonneDbService) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    this.personneDbService.getOnePersonne(id).subscribe (
      res => {
        this.personne = res;
      },
      err => {
        alert('pas d\'element portant id '+id);
      }
    );
  }

  onSubmit(): void {
    this.personneDbService.updatePersonne(this.personne).subscribe(
      _ => {
        console.log('updated');
      },
      err => {
        alert('mise à jour impossible');
      }
    );
    this.router.navigate(['/personnes']);
  }

}
