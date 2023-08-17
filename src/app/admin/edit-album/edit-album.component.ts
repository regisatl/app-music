import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Album } from 'src/app/album';
import { AlbumService } from 'src/app/album.service';
import { fadeInAnimation } from 'src/app/animation.module';

@Component({
      selector: 'app-edit-album',
      templateUrl: './edit-album.component.html',
      styleUrls: ['./edit-album.component.css'],
      animations: [fadeInAnimation]
})
export class EditAlbumComponent {
      albumForm!: FormGroup;
      albumId!: string;

      constructor(
            private formBuilder: FormBuilder,
            private route: ActivatedRoute,
            private router: Router,
            private albumService: AlbumService
      ) { }

      ngOnInit(): void {
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
                              album.description],
                        duration: [
                              album.duration,
                              [
                                    Validators.required
                              ]
                        ],
                  });
            });
      }

      onUpdate() {
            if (this.albumForm.valid) {
                  const updatedAlbum: Album = this.albumForm.value;
                  // Appelez la méthode de mise à jour d'album dans le service
                  this.albumService.updateAlbum(this.albumId, updatedAlbum).subscribe(
                        () => {
                              alert('Album mis à jour avec succès');
                              // Redirigez vers une autre page après la mise à jour
                              this.router.navigate(['/admin'], { queryParams: { message: 'success' } });
                        },
                        error => {
                              console.error('Erreur lors de la mise à jour de l\'album :', error);
                        }
                  );
            }
      }

}