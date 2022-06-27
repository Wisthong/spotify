import { TracksModel } from '@core/models/tracks.model';
import { Component, OnInit } from '@angular/core';
import * as dataRaw from '../../../data/tracks.json';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent implements OnInit {
  tracks: TracksModel[] = [];
  optionSort:{property: string | null, order:string} = {property: null, order: 'asc'};

  constructor() { }

  ngOnInit(): void {
    const {data}: any = (dataRaw as any).default
    this.tracks = data;
  }

  //FIXME: Me recibe un parametro para el cambio del orden
  changeSort(property: string): void{
    const {order} = this.optionSort;
    this.optionSort = {
      property: property,
      order: order === 'asc' ? 'desc' : 'asc'
    }
    console.log(this.optionSort);
  }

}