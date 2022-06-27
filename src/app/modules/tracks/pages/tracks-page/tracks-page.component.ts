import { TrackService } from './../../services/track.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TracksModel } from '@core/models/tracks.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit, OnDestroy {

  tracksTrending: Array<TracksModel> = [];
  tracksRandom: Array<TracksModel> = [];

  listObservers$: Array <Subscription> = [];

  constructor(private readonly trackSvc: TrackService) { }

  ngOnInit(): void {
    const observer1$ = this.trackSvc.dataTracksTrending$.subscribe((res: TracksModel[]) =>{
      this.tracksTrending = res;
    });

    const observer2$ = this.trackSvc.dataTracksRandom$.subscribe(res =>{
      console.log('Cancion new 💋💋💋💋', res);
      this.tracksRandom = [...this.tracksTrending,...res];
    })

    this.listObservers$ = [observer1$, observer2$];
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe);
  }

}
