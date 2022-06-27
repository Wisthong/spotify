import { Injectable } from '@angular/core';
import { TracksModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import * as dataTracks from '../../../data/tracks.json';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  dataTracksTrending$: Observable<TracksModel[]> = of([]);
  dataTracksRandom$: Observable<any> = of([]);

  constructor() {
    const {data} = (dataTracks);
    this.dataTracksTrending$ = of(data);

    this.dataTracksRandom$ = new Observable((observer) =>{
      const newCancion: TracksModel = {
        _id: 45,
        name: 'Wisthong Cepeda',
        album: 'Una navidad sin ti',
        cover: 'https://i1.sndcdn.com/artworks-000074160730-0sxwuj-t500x500.jpg',
        url: 'https'
      }
      //TODO: El observer necesita agregar lo que le llega
      setTimeout(()=>{
        observer.next([newCancion]);
      },5000)
    })

  }
}
