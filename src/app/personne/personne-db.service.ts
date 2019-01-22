import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Personne } from "../shared/model.personne";
import { Observable } from "rxjs";


@Injectable()
export class PersonneDbService {
    private personneUrl = 'api/personnes';
    constructor(private http: HttpClient) { }

    // retourner la liste des personne
    getAllPersonnes(): Observable<Personne[]> {
        return this.http.get<Personne[]>(this.personneUrl);
    }

    // retourner la personne dont l'id est passé en paramettre
    getOnePersonne(id: number): Observable<Personne> {
        return this.http.get<Personne>(this.personneUrl + '/' + id);
    }


    // ajouter un personne à la liste
    addOnePersonne(personne: Personne): Observable<Personne> {
        return this.http.post<Personne>(this.personneUrl, personne);
    }

    // faire la mise à jour
    updatePersonne(personne: Personne): Observable<Personne> {
      return this.http.put<Personne>( (this.personneUrl+'/'+personne.id), personne );
    }

    // suprimer info personne
    deletePersonne(persone: Personne): Observable<Personne> {
        const url = `${this.personneUrl}/${persone.id}`;
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        }
        return this.http.delete<Personne>(url, httpOptions);
    }
}
