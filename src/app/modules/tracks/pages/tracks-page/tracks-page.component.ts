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
    this.trackSvc.getAllTracks$().subscribe((res: TracksModel[]) => {
      this.tracksTrending = res;
    });

    this.trackSvc.getAllRandom$().subscribe((res: TracksModel[]) => {
      this.tracksRandom = res;
      console.log('🩰🩰🩰🩰',res);
    });
  }

  ngOnDestroy(): void {
  }

}
