import { Component } from '@angular/core';

@Component({
  selector: 'app-localize-from-js',
  standalone: true,
  imports: [],
  templateUrl: './localize-from-js.component.html',
  styleUrl: './localize-from-js.component.scss'
})
export class LocalizeFromJsComponent {

  alertMessage = $localize`:Alert message|Description for alert message@@AlertMessageDescription:Alert message`;



  
  alertDialog(){
    alert(this.alertMessage)
  }

  code = `<button (click)="alertDialog()" > Click here </button>`;
  codeJs = `alertMessage = $localize\`:Alert message|Description for alert message@@AlertMessageDescription:Alert message\`;`;

  codeJsFunction = 
  `alertDialog(){
    alert(this.alertMessage)
  }`

}
