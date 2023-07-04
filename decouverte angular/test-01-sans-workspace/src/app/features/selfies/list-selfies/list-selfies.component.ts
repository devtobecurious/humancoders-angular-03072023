import { Component } from '@angular/core';
import { Selfie, SelfieC, SelfieType } from '../models';

@Component({
  selector: 'app-list-selfies',
  templateUrl: './list-selfies.component.html',
  styleUrls: ['./list-selfies.component.css']
})
export class ListSelfiesComponent {
  //private wookie!: Wookiee;
  //titres = ['Selfie 1', 'Selfie 2', 'Selfie 3'];
  selfies: Selfie[] = [
    // new SelfieC('Selfie 1'),
    // new SelfieC('Selfie 2'),
    {
      id: 1,
      titre: 'Selfie 3',
      imageUrl: 'https://picsum.photos/200/300',
      wookiee: {
        prenom: 'Chewbacca'
      }
    }
  ]

  addSelfie(): void {
    this.selfies.push({
      id: this.selfies.length + 1,
      titre: `Selfie ${this.selfies.length + 1}}`,
      imageUrl: 'https://picsum.photos/200/300',
      wookiee: {
        prenom: 'Chewbacca'
      }
    });

  }

  deleteOneItem(selfie: Selfie): void {
    this.selfies = this.selfies.filter(s => s.id !== selfie.id);
  }

  get afficherTableau(): boolean {
    return this.selfies.length > 0;
  }
}

/*

{
  "titre": 'Selfie 1',
  "imageUrl": 'https://picsum.photos/200/300'
  wookiee: {
    "id": 1,
    "prenom": 'Chewbacca'
  }
}

*/
