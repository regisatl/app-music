import { Injectable } from '@angular/core';
import { Album, List, SortAlbumCallback } from './album';
import { ALBUMS, ALBUM_LISTS } from './mock-albums';
// Une classe injectable est un service et peut recevoir d'autre(s) service(s)

@Injectable({
      providedIn: 'root' // injecter de manière globale
})

export class AlbumService {

      constructor() { }

      selectedAlbum!: Album;
      private albums: Album[] = ALBUMS;
      private albumsList: List[] = ALBUM_LISTS

      getAlbums(): Album[] {
            return this.albums;
      };

      getAlbum(id: string) {
            ALBUMS.forEach(elAlbums => {
                  if (elAlbums.id === id) {
                        this.selectedAlbum = elAlbums;
                  }
            });
            return this.selectedAlbum;
      };

      getAlbumsCount(): number {
            return this.albums.length;
      };

      getAlbumList(id: string): List | undefined {
            return this.albumsList.find(albumMusic => albumMusic.id === id);
      };

      getAlbumsByKeyword(keyword: string): Album[] {
            keyword = keyword
                  .trim()
                  .toLowerCase();
            return this.albums.filter(album => album.ref
                  .toLowerCase()
                  .includes(keyword));
      };

      order(callback: SortAlbumCallback): AlbumService {
            this.albums.sort((a: Album, b: Album) => b.duration - a.duration);
            return this;
      };

      limit(start: number, end: number) {
            this.albums = this.albums.slice(start, end);
            return this;
      };

      paginate(start: number, end: number): Album[] {
            return this.albums.slice(start, end);
      };

}

export { Album };

