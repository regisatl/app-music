import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, NgForm } from "@angular/forms";
import { fadeInAnimation } from "../animation.module";
import { testService } from "../test.service";

@Component({
      selector: 'app-first-comp',
      templateUrl: './first-comp.component.html',
      animations: [fadeInAnimation]
})
export class FirstComponent {

      constructor(
            private testService: testService
      ) { }

      email:string = '';

      onButtonClick(form: NgForm) {

            // Envoyer une notification aux abonnés
            const inputText = form.value['email'];
            this.testService.sendData(inputText);
            
      };

}