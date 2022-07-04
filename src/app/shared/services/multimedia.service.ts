import { EventEmitter, Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  callback: EventEmitter<any> = new EventEmitter<any>();

  myObserver$: Observable<any> = new Observable(); //FIXME:  Observable type Observer

  mySubject$: Subject<any> = new Subject(); //FIXME:  Observable type Suject

  myBehaviorSubject$: BehaviorSubject<any> = new BehaviorSubject<any>('💚💚💚'); //FIXME:  Observable type Suject



  constructor() {

    //FIXME: El BehaviorSubject tiene un comportamiento: es un observable y observer a la vez
    setTimeout(() => {
      this.myBehaviorSubject$.next('BehaviorSubject 🟢🟢🟢');
    }, 2000);

    setTimeout(() => {
      this.myBehaviorSubject$.error('BehaviorSubject 🔴🔴🔴');
    }, 5000);

    setTimeout(() => {
      this.myBehaviorSubject$.complete()
    }, 10000);


    //FIXME: El Suject tiene un comportamiento diferente, es un observable y observer a la vez
    setTimeout(() => {
      this.mySubject$.next('Escuchando por el suject 🟢🟢🟢');
    }, 2000);

    setTimeout(() => {
      this.mySubject$.next('Escuchando por el suject 🟢🟢🟢');
    }, 3000);

    setTimeout(() => {
      this.mySubject$.error('Escuchando por el suject 🔴🔴🔴');
    }, 5000);

    setTimeout(() => {
      this.mySubject$.complete()
    }, 1000);


    //FIXME: Observable tipo Observer
    this.myObserver$ = new  Observable((observer: Observer<any>)=>{
      observer.next('🔵🔵🔵🔵');
      setTimeout(() => {
        observer.complete()
      }, 1000);
      setTimeout(() => {
        observer.next('🔵🔵🔵🔵');
      }, 2500);
      setTimeout(() => {
        observer.error('🔴🔴🔴🔴');
      }, 5000);
    });
  }


}
