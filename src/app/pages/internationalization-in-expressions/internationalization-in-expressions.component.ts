import { Component } from '@angular/core';

@Component({
  selector: 'app-internationalization-in-expressions',
  standalone: true,
  imports: [],
  templateUrl: './internationalization-in-expressions.component.html',
  styleUrl: './internationalization-in-expressions.component.scss'
})
export class InternationalizationInExpressionsComponent {

  minutes=0;

  add(num: number){
    this.minutes = this.minutes + num
  }

}
