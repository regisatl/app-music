import { Component } from '@angular/core';
import { Music } from '../album';
import { fadeInAnimation } from '../animation.module';

@Component({
      selector: 'app-form-template',
      templateUrl: './form-template.component.html',
      styleUrls: ['./form-template.component.css'],
      animations: [fadeInAnimation]
})
export class FormTemplateComponent {
      styleMusic: string[] = ['Jazz', 'Pop', 'Zouk', 'Punk', 'Classique', 'Rap'];
      musicModel = new Music('', '', this.styleMusic[0]);
      submitted: boolean = false;

      onSubmit(form: any) {
           this.submitted = !this.submitted;
      }
      /**
       * Visited: touched | untouched
       * Changed: dirty | prinstine
       * Valid: valid | invalid
       * 
       * FormGroup
       *             -->FormControl
       *             -->FormControl
       *             -->FormControl
       */

}
