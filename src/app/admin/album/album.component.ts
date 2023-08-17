import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Album } from 'src/app/album';
import { AlbumService } from 'src/app/album.service';
import { fadeInAnimation } from 'src/app/animation.module';

@Component({
      selector: 'app-album',
      templateUrl: './album.component.html',
      styleUrls: ['./album.component.css'],
      animations: [fadeInAnimation]
})
export class AlbumComponent implements OnInit {

      albums!: Album[];
      messageSuccess: string | undefined = 'Album ajouté avec succès';
      msgSuccess: string | undefined = 'Album supprimé avec succès';
      albumId!: string;
      albumForm!: FormGroup;

      constructor(
            private formBuilder: FormBuilder,
            private route: ActivatedRoute,
            private router: Router,
            private albumService: AlbumService
      ) { }

      ngOnInit(): void {
            this.albumService
                  .paginate(0, this.albumService.paginateNumberPage())
                  .subscribe({
                        next: (alb: Album[]) => { this.albums = alb }
                  });

            this.route.queryParams.subscribe(params => {
                  this.messageSuccess = params["message"];
            });

            this.albumId = this.route.snapshot.params['albumId'];

            this.albumService.getAlbum(this.albumId)?.subscribe(album => {
                  this.albumForm = this.formBuilder.group({
                        name: [
                              album.name,
                              [
                                    Validators.required,
                                    Validators.minLength(5)
                              ]
                        ],
                        ref: [
                              album.ref,
                              [
                                    Validators.required
                              ]
                        ],
                        title: [
                              album.title,
                              [
                                    Validators.required
                              ]
                        ],
                        description: [
                              album.description
                        ],
                        duration: [
                              album.duration,
                              [
                                    Validators.required
                              ]
                        ],
                  });
            });

      }

      onSetPaginate($event: { start: number, end: number }) {
            // Récupérer les albums compris entre [start et end]
            this.albumService
                  .paginate($event.start, $event.end)
                  .subscribe({
                        next: (alb: Album[]) => this.albums = alb
                  });
      }

    
      onDelete(albumId: string) {
            if (confirm('Êtes-vous sûr de vouloir supprimer cet album ?')) {
                  this.albumService.deleteAlbum(albumId).subscribe(
                        () => {
                              // Redirigez vers une autre page après la suppression
                              this.router.navigate(['/admin'], { queryParams: { message: 'Album supprimé avec succès' } });
                        },
                        error => {
                              console.error("Erreur lors de la suppression de l'album :", error);
                        }
                  );
            }
      }

}
