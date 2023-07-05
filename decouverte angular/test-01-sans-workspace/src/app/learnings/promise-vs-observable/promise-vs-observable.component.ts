import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subscriber, Subscription, subscribeOn } from 'rxjs';

@Component({
  selector: 'app-promise-vs-observable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './promise-vs-observable.component.html',
  styleUrls: ['./promise-vs-observable.component.css']
})
export class PromiseVsObservableComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();

  ngOnInit(): void {
    console.info('--------------------------');

    const callBackRetourExecute = (retour: string) => {
      console.info(retour);
    };

    const callbackPromise = (resolve: Function, reject: Function) => {
      console.info('0. Promise callback');

      const callBackCalcul = () => {
        console.info('1. Promise Calcul en cours');

        const grosCalcul = 100;

        resolve('Promise : ' + grosCalcul.toString()); // async
       // reject(new Error('Promise : Erreur')); // async
      };
      setTimeout(callBackCalcul, 0);
    };
    const promise = new Promise<string>(callbackPromise).then(callBackRetourExecute); // Eager => callback is executed immediately


    const callbackObservable = (subscriber: Subscriber<string>) => {
      console.info('0. Observable observable');


      const callBackCalcul = () => {
        console.info('1. Observable Calcul en cours');

        const grosCalcul = 100;
        subscriber.next('Observable : COUCOU'); // de base le next n'est pas async !! ici il est async car on utilise setTimeout
        subscriber.next('Observable : COUCOU BIS'); // de base le next n'est pas async !! ici il est async car on utilise setTimeout
        subscriber.next('Observable : ' + grosCalcul); // de base le next n'est pas async !! ici il est async car on utilise setTimeout
        //subscriber.next('Observe : ' + grosCalcul.toString());
        subscriber.complete();
      };
      subscriber.next('Observable : ALORS ?????');
      setTimeout(callBackCalcul, 0);
    };

    const observable$ = new Observable<string>(callbackObservable); // Lazy => callback is executed when observable is subscribed

    const subscription = observable$.subscribe({
      next: callBackRetourExecute,
      error: (error: Error) => console.error(error),
      complete: () => console.info('Observable : Complete')
    });

    this.subscription.add(subscription);


//    observable$.subscribe(callBackRetourExecute);

    console.info('*****************************');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
