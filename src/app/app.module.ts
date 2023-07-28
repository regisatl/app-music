import { AlbumsComponent } from './albums/albums.component';
import { AlbumDescriptionComponent } from './album-description/album-description.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { SearchComponent } from './search/search.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirstComponent } from './first-comp/first-comp.component';
import { SecondComponent } from './second-comp/second-comp.component';


const albumsRoutes: Routes = [
      { path: '', redirectTo: '/albums', pathMatch: 'full' },
      { path: 'albums', component: AlbumsComponent },
      { path: 'login', component: LoginComponent },
      { path: 'logout', component: LoginComponent },
      { path: 'album/:id', component: AlbumDescriptionComponent },
      { path: 'openClose', component: OpenCloseComponent },
      // Redirection vers PageNotFoundComponent pour toutes les autres routes
      { path: '**', component: PageNotFoundComponent }
];

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
            SecondComponent
      ],
      imports: [
            BrowserModule,
            FormsModule,
            BrowserAnimationsModule,
            RouterModule.forRoot(albumsRoutes), // chargement des routes dans l'application
      ],
      providers: [],
      bootstrap: [AppComponent],
})
export class AppModule { }



