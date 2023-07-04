import { Component, inject } from '@angular/core';
import { Wookiee } from '../models';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-wookiees',
  templateUrl: './list-wookiees.component.html',
  styleUrls: ['./list-wookiees.component.css']
})
export class ListWookieesComponent {
  wookiees: Wookiee[] = [
    { id: 1, name: 'Chewbacca' }
  ];

  tamponWookie: Wookiee | undefined;


  // <= angular 13
  // constructor(private httpClient: HttpClient) {
  // }
  // >= angular 14
  private httpClient = inject(HttpClient);
  wookiees$ = this.httpClient.get<Wookiee[]>('https://swapi.dev/api/people/'); // plus tard, il faut le subscribe ou le async pipe

  maFonction(): void {
    console.info('maFonction');
  }

  editItem(wookiee: Wookiee): void {
    this.tamponWookie = wookiee;
  }

  saveWookiee(wookiee: Wookiee): void {
    // save to api
  }

  cancelSaving(): void {
    this.tamponWookie = undefined;
  }
}
