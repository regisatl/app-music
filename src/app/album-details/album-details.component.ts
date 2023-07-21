// Component enfant
// la classe Input est nécessaire
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Album, List } from '../album';
import { ALBUM_LISTS } from '../mock-albums';

@Component({
      selector: 'app-album-details',
      templateUrl: './album-details.component.html',
      styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit, OnChanges {
      // Classe Input permet de récupérer les data de l'enfant
      // album est liée à une entrée [album] du parent dans le sélecteur
      @Input() album!: Album;
      lists: List[] = ALBUM_LISTS;
      dLists!: Array<string> | undefined;
      constructor() { }
      ngOnInit() {
            console.log(this.album); // pour l'instant c'est undefined ... C'est normal
      }

      ngOnChanges() {
            if (this.album !== undefined) {
                  this.dLists = this.lists.find((element) => this.album.id === element.id)?.list;
            }
      }

}

