import { Component, OnInit } from "@angular/core";
import { Album } from "../album";
import { AlbumService } from "../album.service";
import { fadeInAnimation } from "../animation.module";

@Component({
      selector: 'app-albums',
      templateUrl: './albums.component.html',
      styleUrls: ['./albums.component.css'],
      animations: [fadeInAnimation]
})
export class AlbumsComponent implements OnInit {
      titlePage: string = "Page princiaple Albums Music";
      albums!: Album[];
      selectedAlbum: Album | undefined; // je suis sur qu'une valeur sera passé au moment opportun
      status: string | null = null;
      totalAlbums: number = 0;
      searchTerm: string = '';
      start: number = 0;
      end: number = this.albumService.paginateNumberPage();

      constructor(
            private albumService: AlbumService
      ) { }

      ngOnInit(): void {
            this.updateTotalAlbumsCount();
      }

      onSelect(album: Album) {
            this.selectedAlbum = album;
      }

      playParent($event: Album) {
            this.status = $event.id;
      }

      search($event: Album[]) {
            if ($event) {
                  this.albums = $event;
            }
      }

      resetSelectedAlbum() {
            this.selectedAlbum = undefined;
      }

      onSetPaginate($event: { start: number, end: number }) {
            // Récupérer les albums compris entre [start et end]
            this.albumService.paginate($event.start, $event.end)
                  .subscribe({
                        next: (alb: Album[]) => this.albums = alb
                  });
      }

      onPageChange(pageNumber: number) {
            this.start = (pageNumber - 1) * this.albumService.paginateNumberPage();
            this.end = this.start + this.albumService.paginateNumberPage();

            // Mettre à jour le nombre total d'albums
            this.updateTotalAlbumsCount();

      }

      onSearch(searchTerm: string) {
            this.searchTerm = searchTerm;
            this.start = 0;
            this.end = this.albumService.paginateNumberPage();
            // Mettre à jour le nombre total d'albums en fonction de la recherche
            this.updateTotalAlbumsCount();
      }

      private updateTotalAlbumsCount() {
            this.albumService.count().subscribe(count => {
                  this.totalAlbums = count;
                  this.albumService.paginate(this.start, this.end).subscribe(albums => {
                        this.albums = albums;
                  });
            });
      }

}
