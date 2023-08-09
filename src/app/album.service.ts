import { Injectable } from '@angular/core';
import { Album, List } from './album';
import { ALBUMS, ALBUM_LISTS } from './mock-albums';
import { Subject } from 'rxjs';
// Une classe injectable est un service et peut recevoir d'autre(s) service(s)

@Injectable({
      providedIn: 'root' // injecter de manière globale
})

export class AlbumService {

      constructor() { }

      selectedAlbum!: Album;
      private albums: Album[] = ALBUMS;
      private albumsList: List[] = ALBUM_LISTS;
      subjectAlbum = new Subject<Album>();

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

      paginate(start: number, end: number): Album[] {
            return this.albums.slice(start, end);
      };
      /**
       * 
       * Méthode qui permet de changer le status d'un album à 'on'
       * @param album : l'album dont le status doit passer à "on"
       */

      switchOn(album: Album) {

            this.albums.forEach((a: Album) => {
                  // si l'album actuel est celui qu'on joue 
                  if (a.id === album.id) {
                        //mettre le status à "on"
                        a.status = "on"; // L'album est en train d'être écouté
                        album.status = "on";
                  }
                  else {
                        // sinon mettre le status à "off"
                        a.status = "off"; // Désactive l'écoute de l'album
                  }
            });
            // envoyez une notification à tous les abonnés
            this.subjectAlbum.next(album);

      };

      switchOff(album: Album) {
            album.status = 'off'; // Désactive l'écoute de l'album
      };

}

export { Album };

      // order(callback: SortAlbumCallback): AlbumService {
      //       this.albums.sort((a: Album, b: Album) => b.duration - a.duration);
      //       return this;
      // };

      // limit(start: number, end: number) {
      //       this.albums = this.albums.slice(start, end);
      //       return this;
      // };
