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
import { ShareModule } from './share/share.module';
import { FormTemplateComponent } from './form-template/form-template.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';


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
            FormTemplateComponent,
            FormReactiveComponent,
      ],
      imports: [
            BrowserModule,
            FormsModule,
            BrowserAnimationsModule,
            HttpClientModule,
            AdminModule,
            ShareModule,
            AppRoutingModule,
      ],
      providers: [],
      bootstrap: [AppComponent],
})
export class AppModule { }



