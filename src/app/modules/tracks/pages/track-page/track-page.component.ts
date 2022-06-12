import { Component, OnInit } from '@angular/core';
import { TracksModel } from '@core/models/tracks.model';
import * as dataRaw from '../../../../data/tracks.json';


@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.css']
})
export class TrackPageComponent implements OnInit {

  dataList: Array<TracksModel> = [

  ]

  constructor() { }

  ngOnInit(): void {
    const {data}: any = (dataRaw as any).default;
    this.dataList = data;
  }

}
