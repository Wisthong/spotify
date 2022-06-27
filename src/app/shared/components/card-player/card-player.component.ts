import { Component, Input, OnInit } from '@angular/core';
import { TracksModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent implements OnInit {

  @Input() mode: 'small' | 'big' = 'small';
  @Input() track!: TracksModel;

  constructor(private readonly multimediaService: MultimediaService) { }

  ngOnInit(): void {
  }

  //TODO: Emitir al footer reproductor la canción.
  sendPlay(track: TracksModel): void{
    console.log('🙉🙉🙉 Enviado cancion...', track);
    this.multimediaService.callback.emit(track);
  }

}
