// Component enfant
// la classe Input est nécessaire
import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Album, List } from '../album';
import { AlbumService } from '../album.service';

@Component({
      selector: 'app-album-details',
      templateUrl: './album-details.component.html',
      styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit, OnChanges {

      // Classe Input permet de récupérer les data de l'enfant
      @Input() album!: Album;

      // album est liée à une entrée [album] du parent dans le sélecteur
      lists: List[] = [];

      albumsLists!: string[] | undefined;

      isPlaying: boolean = false; // Propriété pour suivre l'état de lecture

      constructor(
            private albumService: AlbumService,
      ) { }

      ngOnInit() {
            this.album;
      };

      ngOnChanges(): void {

            if (this.album !== undefined) {
                  this.albumsLists = this.albumService.getAlbumList(this.album.id)?.list;
            }

      };

      @Output() onPlay: EventEmitter<Album> = new EventEmitter();

      play(album: Album) {

            this.onPlay.emit(album); // émettre un album vers le parent AlbumsComponent
            this.isPlaying = !this.isPlaying; // Inverse l'état de lecture

      };
}

