import { Component } from '@angular/core';
import { FilmeAPIService } from './services/filme-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;
  title = 'Filme-API';
  readonly apiURL : string;

  constructor(private filmeService: FilmeAPIService) {
    this.apiURL = "https://api.themoviedb.org/3/movie/550?api_key=328bda88946184d02e2280add99ac82a"
  }

  listarFilme() {
    this.filmeService.procurarFilme(550).subscribe(resultado => console.log(resultado))
  }
}
