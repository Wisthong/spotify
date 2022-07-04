import { Component, OnInit } from '@angular/core';
import { TracksModel } from '@core/models/tracks.model';
import { SearchService } from '@modules/history/service/search.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {
  listResultado: Observable<any> = of([]);

  constructor(private readonly searchSvc: SearchService) { }

  ngOnInit(): void {

  }

  receiveData(event: string){
    console.log('🎎🎎🎎-->',event);
    this.listResultado = this.searchSvc.searchTracks$(event)
  }

}
