import { Component, Output, EventEmitter } from '@angular/core';
import { AlbumService } from '../album.service';
import { Album } from '../album';
import { NgForm } from '@angular/forms';
import { fadeInAnimation } from '../animation.module';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
    animations: [fadeInAnimation]
})
export class SearchComponent {
    // Propriété pour stocker le critère de recherche saisi par l'utilisateur
    search = 'Search Albums';
    searchKeyword: string = '';
    searchResults: Album[] = [];
    word: string = '';

    constructor(private albumService: AlbumService) { }

    // Événement émis lorsque l'utilisateur effectue une recherche
    @Output() searchChanged: EventEmitter<Album[]> = new EventEmitter();

    // Méthode pour déclencher l'événement de recherche avec le critère saisi
    searchAlbums() {
        if (this.searchKeyword) {
            this.searchResults = this.albumService.getAlbumsByKeyword(this.searchKeyword);
        } else {
            this.searchResults = [];
        }
    };

    onSubmit(form: NgForm): void {
        const keyword = form.value['word'];
        this.searchResults = this.albumService.getAlbumsByKeyword(keyword);
        this.searchChanged.emit(this.searchResults);
    };
    onChangedEmit($event: string) {
        this.searchResults = this.albumService.getAlbumsByKeyword($event);
        this.searchChanged.emit(this.searchResults);
    };
}
