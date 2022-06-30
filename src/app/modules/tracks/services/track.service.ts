import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TracksModel } from '@core/models/tracks.model';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly URL = environment.api;

  constructor(private readonly http: HttpClient) {}


  getAllTracks$(): Observable<any>{
    return this.http.get<any>(this.URL+'/tracks',
    // {headers: new HttpHeaders({ authorization: 'Bearer TOKEN' }) //TODO: Interceptor}
    )
    .pipe(
      map(({data})=>{
        return data;
      })
    );
  }

  //FIXME: Service para tracks Random
  getAllRandom$(): Observable<any>{
    return this.http.get<any>(this.URL+'/tracks')
    .pipe(
      map(({data})=>{
        return data
      }),
      map((dataReverse)=>{
        return dataReverse.reverse().filter((track: TracksModel)=> track._id != 8 && track._id != 5);
      })
    )
  }
}
