import { Component, OnInit } from '@angular/core';
import { Album, AlbumService } from '../album.service';

@Component({
      selector: 'app-audio-player',
      templateUrl: './audio-player.component.html',
      styleUrls: ['./audio-player.component.css']
})
export class AudioPlayerComponent implements OnInit {
      // Variable permettant d'afficher ou non, le composant audio-player
      showPlayer: boolean = false;
      // Variable représentant l'album joué
      playedAlbum!: Album;
      // variable représentant la manière de progression du son
      progressRatio = 0;
      // variable représentant le nombre total de sons dans l'album
      total: number = 1;
      // variable représentant le numéro du son joué actuellement (1/4)
      currentSongNumber: number = 1;
      // variable représentant la durée de chaque l'album
      duration!: number;
      // niveau d'étape
      step!: number;

      constructor(
            private albumService: AlbumService,
      ) { }

      ngOnInit(): void {
            // souscrire au Sujet "subjectAlbum" pour recevoir les notification
            this.albumService.subjectAlbum.subscribe({
                  next: (a: Album) => {
                        this.playedAlbum = a;
                        // afficher le composant
                        this.showPlayer = true;
                        // le son joué en 1er est le n°1
                        this.currentSongNumber = 1;
                        this.duration = this.playedAlbum.duration; // durée total de l'album
                        this.total = Math.floor(this.duration / 120);
                        //
                        this.progressRatio = (100 / this.total);

                        // variable représentan le % à ajouter après chaque son dans la barre de progression
                        this.step = this.progressRatio; // il faut à chaque fois augmenter le progessRatio%

                        // augmenter le niveau de la bar de progression chaque 2 minutes (120 000 milliseconds)

                        const timerId = setInterval(() => {
                              this.currentSongNumber++;
                              this.progressRatio += this.step;
                              if (this.progressRatio > 100) {
                                    clearInterval(timerId);
                                    this.showPlayer = false;
                                    this.albumService.switchOff(this.playedAlbum);
                              }

                        }, 1000)

                  }
            })
      }


}
