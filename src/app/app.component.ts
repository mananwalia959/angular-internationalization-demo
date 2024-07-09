import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  alertMessage = 'internationalization-demo';

  minutes=0;

  alertDialog(){
    console.log("here")
    alert(this.alertMessage)
  }

  add(num: number){
    this.minutes = this.minutes + num
  }
}
