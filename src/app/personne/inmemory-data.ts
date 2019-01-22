import { PERSONNES } from "../shared/model.personne";
import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let personnes = PERSONNES;
        return { personnes };
    }
}