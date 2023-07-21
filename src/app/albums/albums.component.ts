import { Component, OnInit } from '@angular/core';
// Importez la définition de la classe et les albums
import { Album, List } from '../album';
import { ALBUMS } from '../mock-albums';
import { ALBUM_LISTS } from '../mock-albums';
@Component({
      selector: 'app-albums',
      templateUrl: './albums.component.html',
      styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
      titlePage: string = "Page princiaple Albums Music";
      albums: Album[] = ALBUMS;
      selectedAlbum !: Album;

      constructor() { }
      ngOnInit() {
      }
      
      onSelect (album: Album) : void {
            this.selectedAlbum = album;            
      }
}

