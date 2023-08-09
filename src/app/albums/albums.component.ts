import { Component, OnInit } from '@angular/core';
// Importez la définition de la classe et les albums
import { Album } from '../album';
import { AlbumService } from '../album.service';
import { fadeInAnimation } from '../animation.module';

@Component({
      selector: 'app-albums',
      templateUrl: './albums.component.html',
      styleUrls: ['./albums.component.css'],
      animations: [fadeInAnimation]
})

export class AlbumsComponent implements OnInit {
      private start = 0;
      private end = 10;
      public pageNumber!: number;
      titlePage: string = "Page princiaple Albums Music";
      albums: Album[] = [];
      selectedAlbum!: Album;
      filteredAlbums: Album[] = [];
      paginatedAlbums!: Album[];
      currentPage: number = 1;
      totalPages!: number;
      messageAlert : string = "Aucun album de ce nom trouvé...." ;
      seen: boolean = true; // Propriété pour afficher/cacher la liste aléatoire

      constructor(
            private albumService: AlbumService,
            private service: AlbumService
      ) {
            this.paginatedAlbums = this.albumService.paginate(0, 1);
            this.totalPages = this.getTotalPages();
            this.currentPage = 1;
      }

      ngOnInit() {
            return this.albums = this.albumService.getAlbums();
      };

      onSelect(album: Album) {
            this.seen = true;
            return this.selectedAlbum = this.service.getAlbum(album.id);
            
      };

      // Méthode pour gérer l'événement "onPlay" émis par le composant "album-details"
      playParent(album: Album) {

            for (let i = 0; i < this.albums.length; i++) {
                  if (album.id !== this.albums[i].id) {
                        this.albums[i].status = 'off'
                  }
            }
            album.status = 'on';

            return this.service.getAlbumList(album.id);
      };

      // méthode count permettant de compter le nombre total de pages sur l'accueil
      count(): number {
            return this.albumService.getAlbums().length;
      };

      // méthode onSearchChanged qui permet de déclencher l'évènement
      onSearchChanged($event: Album[]) {
            if ($event) {
                  this.paginatedAlbums = $event;
            }
            return  this.messageAlert;
      };

      onPageChange(pageNumber: number) {
            if (pageNumber >= 1 && pageNumber <= this.totalPages) {
                  this.currentPage = pageNumber;
                  this.start = (this.currentPage - 1) * 1; 
                  this.end = this.start + 1; 
                  this.paginatedAlbums = this.albumService.paginate(this.start, this.end);
            }
      };

      getTotalPages(): number {
            return Math.ceil(this.albumService.getAlbumsCount() / 1); 
      };

      getPageNumbers(): number[] {
            return Array.from({ length: this.totalPages }, (_ALBUM_LISTS, i) => i + 1);
      };

      toggleRandomList($event: boolean) {
            this.seen = false;
      };

}

