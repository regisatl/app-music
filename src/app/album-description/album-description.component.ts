import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album, AlbumService } from '../album.service';
import { fadeInAnimation } from '../animation.module';

@Component({
      selector: 'app-album-description',
      templateUrl: './album-description.component.html',
      styleUrls: ['./album-description.component.css'],
      animations: [fadeInAnimation]
})
export class AlbumDescriptionComponent implements OnInit {
      album!: Album;
      service: any;

      constructor(
            private route: ActivatedRoute,
            private albumService: AlbumService
      ) { }

      ngOnInit() {
            this.route.params.subscribe(params => {
                  const albumId = params['id'];
                  this.album = this.albumService.getAlbum(albumId);
            });
      }
}


