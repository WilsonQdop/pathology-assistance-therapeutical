import { Component } from '@angular/core';
import { HomepageComponent } from './homepage/homepage.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { provideRouter, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

}