import { Component, OnInit } from '@angular/core';
import { TracksModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {
  mockCover: TracksModel= {
    cover: 'https://e.snmc.io/i/600/w/3f2bb8fd6409f20e7f31ab0f4a8a2431/9918106/bad-bunny-un-verano-sin-ti-Cover-Art.jpg',
    album:'Un verano sin ti',
    name: 'Wiz David',
    url: 'localhost',
    _id: 'ABCS2'
   }

  constructor() { }

  ngOnInit(): void {
  }

}