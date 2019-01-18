export class Personne {
    id: number;
    nom: string;
    prenom: string;
    age: number;
    description: string;
    image: string;

    constructor(id?: number, nom?:string, prenom?:string, age?:number, description?:string, image?:string){
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.description = description;
        this.image = image;
    }
}

export const PERSONNES: Personne[] = [
    {
        id: 1,
        nom: "YAO",
        prenom: "AKISSI",
        age: 30,
        description: 'Visual Studio Code is unable to watch for file changes in this large workspace. Please follow the instructions link to resolve this issue.',
        image: 'https://images.pexels.com/photos/1738920/pexels-photo-1738920.jpeg?auto=compress&cs=tinysrgb&dpr=2'
    },
    {
        id: 2,
        nom: "KOUAO",
        prenom: "KRA",
        age: 30,
        description: 'Visual Studio Code is unable to watch for file changes in this large workspace. Please follow the instructions link to resolve this issue.',
        image: 'https://images.pexels.com/photos/1047935/pexels-photo-1047935.jpeg?auto=compress&cs=tinysrgb&dpr=2'
    },
    {
        id: 3,
        nom: "KOFFI",
        prenom: "FOFFIÉ",
        age: 30,
        description: 'Visual Studio Code is unable to watch for file changes in this large workspace. Please follow the instructions link to resolve this issue.',
        image: 'https://images.pexels.com/photos/1707818/pexels-photo-1707818.jpeg?auto=compress&cs=tinysrgb&dpr=2'
    },
    {
        id: 4,
        nom: "KOUAKOU",
        prenom: "KOUAKOU",
        age: 30,
        description: 'Visual Studio Code is unable to watch for file changes in this large workspace. Please follow the instructions link to resolve this issue.',
        image: 'https://images.pexels.com/photos/1182238/pexels-photo-1182238.jpeg?auto=compress&cs=tinysrgb&dpr=2'
    },
    {
        id: 5,
        nom: "MAXIME",
        prenom: "BLÉ",
        age: 30,
        description: 'Visual Studio Code is unable to watch for file changes in this large workspace. Please follow the instructions link to resolve this issue.',
        image: 'https://images.pexels.com/photos/1447003/pexels-photo-1447003.jpeg?auto=compress&cs=tinysrgb&dpr=2'
    },
    {
        id: 6,
        nom: "MOUNA",
        prenom: "AKISSI",
        age: 30,
        description: 'Visual Studio Code is unable to watch for file changes in this large workspace. Please follow the instructions link to resolve this issue.',
        image: 'https://images.pexels.com/photos/1708523/pexels-photo-1708523.jpeg?auto=compress&cs=tinysrgb&dpr=2'
    }
]