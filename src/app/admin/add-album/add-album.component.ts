import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { fadeInAnimation } from 'src/app/animation.module';
import { AlbumService } from '../../album.service';

@Component({
      selector: 'app-add-album',
      templateUrl: './add-album.component.html',
      styleUrls: ['./add-album.component.css'],
      animations: [fadeInAnimation]
})

export class AddAlbumComponent implements OnInit {
      albumForm: any;
      constructor(
            private formBuilder: FormBuilder,
            private albumService: AlbumService
      ) { }


      ngOnInit() {
            this.formBuilder.group({
                  name: new FormControl('', [
                        Validators.required,
                        Validators.minLength(5)
                  ]),
            })

      }



}
