export class SelfieC {
  imageUrl !: string;
  wookiee: Wookiee | undefined;

  constructor(public titre: string) {
    if(this.wookiee) {
      this.wookiee.prenom = 'Chewbacca';
    }
  }
}

export class WookieeC {
  prenom = '';
}


export type SelfieType = {
  titre: string;
  imageUrl: string;
  wookiee: Wookiee | undefined;
}

export interface Selfie {
  id: number;
  titre: string;
  imageUrl: string;
  wookiee: Wookiee | undefined;
}

export interface Wookiee {
  prenom: string;
}


interface MonInterfaceInterne {

}
