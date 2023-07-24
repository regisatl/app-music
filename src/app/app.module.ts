import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        AppComponent,
        AlbumsComponent,
        AlbumDetailsComponent,
        SearchComponent,

    ],
    imports: [
        BrowserModule,
        FormsModule // importez le module
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
