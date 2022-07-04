import { TracksModel } from '@core/models/tracks.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent implements OnInit {
  @Input() tracks: TracksModel[] = [];
  optionSort:{property: string | null, order:string} = {property: null, order: 'asc'};

  constructor() { }

  ngOnInit(): void {

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
