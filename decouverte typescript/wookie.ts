
export interface IMoyenDeplacement  {
    seDeplacer(): void;
}

export class FalconMillenium implements IMoyenDeplacement {
    seDeplacer(): void {
        console.log("Je vole dans l'espace");
    }
}

export class XWing implements IMoyenDeplacement {
    seDeplacer(): void {
        console.log("Je vole dans l'espace moins vite, xwing oblige");
    }
}

export class MotoJet implements IMoyenDeplacement {
    seDeplacer(): void {
        console.log("Je vole sur une planète");
    }
}

export type TypeHumeur = "joyeux" | "triste" | "en colère";
export type TypeHumeurPlus = TypeHumeur | "fatigué";

export const humeur: TypeHumeur = "joyeux";


export type FactoryMoyenDeplacement = (humeur: TypeHumeur) => IMoyenDeplacement;

export const createMoyenDeplacement: FactoryMoyenDeplacement = (humeur: TypeHumeur): IMoyenDeplacement => {
    if (humeur === "joyeux") {
        return new FalconMillenium();
    } else if (humeur === "triste") {
        return new XWing();
    } else {
        return new MotoJet();
    }
}

export class Wookie {
    private _humeur !: TypeHumeur;
    private moyenDeplacement !: IMoyenDeplacement;

    constructor(public name: string, public age: number, private color: string, humeur: TypeHumeur, 
                private factoryDeplacement: FactoryMoyenDeplacement) {
        this.humeur = humeur;   
    }

    public seDeplacer(): void {
        this.moyenDeplacement.seDeplacer();
    }

    public get humeur(): TypeHumeur {
        return this._humeur;
    }
    public set humeur(value: TypeHumeur) {
        this.moyenDeplacement = this.factoryDeplacement(this.humeur);
        this._humeur = value;
    }
}

const wookie = new Wookie("Chewie", 234, "marron", "joyeux", createMoyenDeplacement);

class WookieOld {
    public name: string;
    public age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}