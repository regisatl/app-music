import { AlbumsComponent } from './albums/albums.component';
import { AlbumDescriptionComponent } from './album-description/album-description.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirstComponent } from './first-comp/first-comp.component';
import { SecondComponent } from './second-comp/second-comp.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { HttpClientModule } from "@angular/common/http";
import { PaginateComponent } from './paginate/paginate.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin/admin.module';


@NgModule({
      declarations: [
            AppComponent,
            AlbumsComponent,
            AlbumDetailsComponent,
            SearchComponent,
            LoginComponent,
            AlbumDescriptionComponent,
            OpenCloseComponent,
            PageNotFoundComponent,
            FirstComponent,
            SecondComponent,
            AudioPlayerComponent,
            PaginateComponent     
      ],
      imports: [
            BrowserModule,
            FormsModule,
            BrowserAnimationsModule,
            AppRoutingModule,
            HttpClientModule,
            AdminModule
      ],
      providers: [],
      bootstrap: [AppComponent],
})
export class AppModule { }



