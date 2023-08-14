import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { fadeInAnimation } from '../animation.module';

@Component({
      selector: 'app-form-reactive',
      templateUrl: './form-reactive.component.html',
      styleUrls: ['./form-reactive.component.css'],
      animations: [fadeInAnimation]
})
export class FormReactiveComponent {
      constructor(
            private formBuilder: FormBuilder
      ) { }

      styleMusic: string[] = ['Hip-Hop', 'Jazz', 'Pop', 'Zouk', 'Punk', 'Classique', 'Rap'];

      musicForm = this.formBuilder.group({
            name: [
                  '',
                  [Validators.required,
                  Validators.minLength(10)]
            ],
            author: [
                  '',
                  Validators.required,
            ],
            style: [''],
      })

      get name() { return this.musicForm.get("name"); }
      get author() { return this.musicForm.get("author"); }
      get style() { return this.musicForm.get("style"); }

      onSubmit() {
            console.log(this.musicForm.value);
      }

}
