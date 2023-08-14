import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { LoginComponent } from './login/login.component';
import { FirstComponent } from './first-comp/first-comp.component';
import { AlbumDescriptionComponent } from './album-description/album-description.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AlbumComponent } from './admin/album/album.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { FormTemplateComponent } from './form-template/form-template.component';


const albumsRoutes: Routes = [
      { path: '', redirectTo: '/albums', pathMatch: 'full' },
      { path: 'albums', component: AlbumsComponent },
      { path: 'album/:albumId', component: AlbumDescriptionComponent },
      { path: 'admin', component: AlbumComponent },
      { path: 'login', component: LoginComponent },
      { path: 'forgetPassword', component: FirstComponent },
      { path: 'logout', component: LoginComponent },
      { path: 'openClose', component: OpenCloseComponent },
      { path: 'reactive', component: FormReactiveComponent },
      { path: 'template', component: FormTemplateComponent },

      // Redirection vers PageNotFoundComponent pour toutes les autres routes
      { path: '**', component: PageNotFoundComponent }
];

@NgModule({
      declarations: [],
      imports: [
            CommonModule,
            RouterModule.forRoot(albumsRoutes), // chargement des routes dans l'application 
      ],
      exports: [RouterModule],
})
export class AppRoutingModule { }
