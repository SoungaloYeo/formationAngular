import { Component, OnInit } from '@angular/core';
import { Personne, PERSONNES} from './shared/model.personne';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
public title = "AngularObjis";
  constructor(private router: Router){}


  retour(): void {
    this.router.navigate(['/personnes']);
  }

}
