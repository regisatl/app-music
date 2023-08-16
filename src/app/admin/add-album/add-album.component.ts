import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Album } from 'src/app/album';
import { fadeInAnimation } from 'src/app/animation.module';
import { AlbumService } from '../../album.service';

@Component({
      selector: 'app-add-album',
      templateUrl: './add-album.component.html',
      styleUrls: ['./add-album.component.css'],
      animations: [fadeInAnimation]
})

export class AddAlbumComponent implements OnInit {
      albumForm!: FormGroup; // Utilisez FormGroup ici
      album!: Album; // Ajoutez cette propriété
      albumId!: string;

      constructor(
            private formBuilder: FormBuilder,
            private albumService: AlbumService,
            private router: Router,
      ) { }


      ngOnInit() {
            this.albumForm = this.formBuilder.group({
                  id: [''],
                  name: ['',
                        [Validators.required, Validators.minLength(5)]
                  ],
                  ref: ['', // 20FTX
                        [
                              Validators.required,
                              Validators.pattern('\\w{3}') // doit avoir 5 caractères 
                              //Validators.pattern('[A-Z0-9]{5}')
                        ]
                  ],
                  title: ['',
                        [Validators.required]
                  ],
                  description: ['',
                        [Validators.required]
                  ],
                  duration: ['',
                        [
                              Validators.required,
                              Validators.pattern('[0-9]*'),
                              Validators.max(900)
                        ]
                  ],
                  status: 'off',
            });

      }

      get name() { return this.albumForm.get("name"); }
      get ref() { return this.albumForm.get("ref"); }
      get title() { return this.albumForm.get("title"); }
      get description() { return this.albumForm.get("description"); }
      get duration() { return this.albumForm.get("duration"); }

      onSubmit() {
            if (this.albumForm.valid) {
                  const newAlbum: Album = this.albumForm.value;
                  // Appelez la méthode d'ajout d'album dans le service
                  this.albumService.addAlbum(newAlbum)
                        .subscribe(
                              () => {
                                    alert('Album ajouté avec succès');
                                    // Redirigez vers une autre page après l'ajout
                                    this.router.navigate(['/admin'], { queryParams: { message: 'success' } });
                              },
                              error => {
                                    console.warn("Erreur lors de l'ajout de l'album :", error);
                              }
                        );
            }
      }


}




