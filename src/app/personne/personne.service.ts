import { Injectable } from "@angular/core";
import { PERSONNES, Personne } from "../shared/model.personne";

@Injectable()
export class PersonneService {

    getAllPerson(): Personne[] {
        return PERSONNES;
    }

    getOne(id: number): Personne {
        let personnes = this.getAllPerson();
        for (let i = 0; i < personnes.length; i++) {
            if(id === personnes[i].id){
                return personnes[i];
            }
        }
    }

    addPerson(personne: Personne): void {
        PERSONNES.push(personne);
    }

    updatePerson(personne: Personne): void {
        for(let i = 0; i < this.getAllPerson().length; i++) {
            if(personne.id === this.getAllPerson()[i].id) {
                this.getAllPerson()[i] = personne;
            }
        }
    }


    deletePerson(personne: Personne): void {
        for(let i = 0; i < this.getAllPerson().length; i++) {
            if(personne.id === this.getAllPerson()[i].id) {
                this.getAllPerson().splice(i, 1);
            }
        }
    }

}