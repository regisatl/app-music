import { Injectable } from '@angular/core';
import { Album, List } from './album';
import { ALBUMS, ALBUM_LISTS } from './mock-albums';
// Une classe injectable est un service et peut recevoir d'autre(s) service(s)

@Injectable({
      providedIn: 'root' // injecter de manière globale
})

export class AlbumService {
      constructor() { }

      selectedAlbum!: Album;
      private albums: Album[]  = ALBUMS;
      private albumsList: List[]  = ALBUM_LISTS

      getAlbums(): Album[] {
            this.albums.sort((a: Album, b: Album) => b.duration - a.duration);        
            return this.albums;
      }

      getAlbum(id: string) {
            ALBUMS.forEach(elAlbums => {
                  if (elAlbums.id === id) {
                        this.selectedAlbum = elAlbums;
                  }
            });
            return this.selectedAlbum;
      }

      getAlbumList(id: string): List | undefined {
           return this.albumsList.find(albumMusic => albumMusic.id === id); 
      }

      paginate(start: number, end: number): Album[] {
            return this.albums.slice(start, end);
      }

      getAlbumsByKeyword(keyword: string): Album[] {
            keyword = keyword.trim().toLowerCase();
            return this.albums.filter(album => album.title.toLowerCase().includes(keyword));
      }

}

