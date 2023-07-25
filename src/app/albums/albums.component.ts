import { Component, OnInit } from '@angular/core';
// Importez la définition de la classe et les albums
import { Album } from '../album';
import { AlbumService } from '../album.service';

@Component({
      selector: 'app-albums',
      templateUrl: './albums.component.html',
      styleUrls: ['./albums.component.css']
})

export class AlbumsComponent implements OnInit {
      titlePage: string = "Page princiaple Albums Music";
      albums: Album[] = [];
      selectedAlbum!: Album;
      filteredAlbums: Album[] = [];
      paginatedAlbums!: Album[];
      private start = 0;
      private end = 10;
      public pageNumber!: number;

      constructor(
            private service: AlbumService,
            private albumService: AlbumService,
      ) {
            this.paginatedAlbums = this.albumService.paginate(this.start, this.end);
      }

      ngOnInit() {
            return this.albums = this.service.getAlbums();
      }

      onSelect(album: Album) {
            return this.selectedAlbum = this.service.getAlbum(album.id);
      }

      // Méthode pour gérer l'événement "onPlay" émis par le composant "album-details"
      playParent(album: Album) {

            for (let i = 0; i < this.albums.length; i++) {
                  if (album.id !== this.albums[i].id) {
                        this.albums[i].status = 'off'
                  }
            }
            album.status = 'on';

            return this.service.getAlbumList(album.id);
      }

      count(): number {
            return this.albumService.getAlbums().length;
      }

      onPageChange(pageNumber: number) {
            this.start = (pageNumber - 1) * 10;
            this.end = this.start + 10;
            this.paginatedAlbums = this.albumService.paginate(this.start, this.end);
      }

      onSearchChanged($event: Album[]) {
            this.albums = $event;
      }
}

