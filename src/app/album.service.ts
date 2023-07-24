import { Injectable } from '@angular/core';
import { Album } from './album';
import { ALBUMS } from './mock-albums';
// Une classe injectable est un service et peut recevoir d'autre(s) service(s)

@Injectable({
      providedIn: 'root' // injecter de manière globale
})
export class AlbumService {
      constructor() { }

      selectedAlbum!: Album;
      private albums: Album[] = [];

      getAlbums(): Album[] {
            return ALBUMS;
        }
    
        getAlbum(id : string) {
            ALBUMS.forEach(elAlbums => {
                  if( elAlbums.id === id) {
                        this.selectedAlbum = elAlbums;
                  }
            });
            return this.selectedAlbum;
      }

        getAlbumList(id: string): string[] | undefined {
            const album = this.albums.find(album => album.id === id);
            return album ? album.tracks : undefined;
        }

}

