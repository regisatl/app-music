import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album/album.component';
import { ShareModule } from '../share/share.module';
import { AddAlbumComponent } from './add-album/add-album.component';
import { RouterModule, Routes } from '@angular/router';

// Dans l'AdminModule définition des routes
const routers: Routes = [
      { path: 'admin/add', component: AddAlbumComponent },
]

@NgModule({
      declarations: [
            AddAlbumComponent,
            AlbumComponent,
      ],
      imports: [
            RouterModule.forChild(routers), // chargement des routes dans l'application 
            CommonModule,
            ShareModule,
      ],
      exports: [
            AlbumComponent, 
      ],
})
export class AdminModule { }
