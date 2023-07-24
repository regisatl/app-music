import { Component, Output, EventEmitter } from '@angular/core';
import { AlbumService } from '../album.service';
import { Album } from '../album';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent {
    // Propriété pour stocker le critère de recherche saisi par l'utilisateur
    search = 'Search Albums';
    searchKeyword: string = '';
    searchResults: Album[] = [];

    constructor(private albumService: AlbumService) { }

    // Événement émis lorsque l'utilisateur effectue une recherche
    @Output() searchChanged = new EventEmitter<string>();

    // Méthode pour déclencher l'événement de recherche avec le critère saisi
    searchAlbums() {
        if (this.searchKeyword) {
            this.searchResults = this.albumService.getAlbumsByKeyword(this.searchKeyword);
        } else {
            this.searchResults = [];
        }
    }

    onSubmit(form: NgForm): void {
        const keyword = form.value['word'];
        this.searchResults = this.albumService.getAlbumsByKeyword(keyword);
    }
}
