import { Component, Input, OnInit } from "@angular/core";
import { fadeInAnimation } from "../animation.module";
import { testService } from "../test.service";

@Component({
      selector: 'app-second-comp',
      templateUrl: './second-comp.component.html',
      styleUrls: ['./second-comp.component.css'],
      animations: [fadeInAnimation]
})
export class SecondComponent  implements OnInit {

      
      constructor(
            private testService : testService
      ) { }
     
      enteredText : string = '';
      @Input() send : string | undefined;

      ngOnInit () {
            this.testService.dataEmitter.subscribe((data) => {
                  this.enteredText = data;
            });
      }

}