import { ArtistaModel } from "./artista.model";

export interface TracksModel {
  name: string;
  album: string;
  cover: string;
  url: string;
  _id: string | number;
  artista?: ArtistaModel;

}
