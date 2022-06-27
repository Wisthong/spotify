import { Component, OnInit } from '@angular/core';
import { TracksModel } from '@core/models/tracks.model';
import * as dataRaw from '../../../../data/tracks.json';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {

  dataList: Array<TracksModel> = []

  constructor() { }

  ngOnInit(): void {
    const {data} = (dataRaw);
    this.dataList = data;
  }

}
