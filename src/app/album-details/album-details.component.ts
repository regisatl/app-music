// Component enfant
// la classe Input est nécessaire
import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Album, List } from '../album';
import { AlbumService } from '../album.service';
import { fadeInAnimation } from '../animation.module';

@Component({
      selector: 'app-album-details',
      templateUrl: './album-details.component.html',
      styleUrls: ['./album-details.component.css'],
      animations: [fadeInAnimation]
})
export class AlbumDetailsComponent implements OnInit, OnChanges {

      // Classe Input permet de récupérer les data de l'enfant
      @Input() album!: Album;

      // album est liée à une entrée [album] du parent dans le sélecteur
      lists: List[] = [];
      randomList: string[] = [];
      albumsLists!: string[] | undefined;
      seen: boolean = true; // Propriété pour afficher/cacher la liste aléatoire
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

      @Output() toggleDetails: EventEmitter<boolean> = new EventEmitter();

      play(album: Album) {

            this.onPlay.emit(album); // émettre un album vers le parent AlbumsComponent
            this.isPlaying = !this.isPlaying; // Inverse l'état de lecture

      };

      shuffleAlbumsLists() {
            if (this.albumsLists && this.albumsLists.length > 1) {
                  for (let i = this.albumsLists.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [this.albumsLists[i], this.albumsLists[j]] = [this.albumsLists[j], this.albumsLists[i]];
                  }
            }
      };

      // Méthode pour afficher/cacher la liste aléatoire
      toggleList() {
            this.toggleDetails.emit(this.seen);
      }
}

