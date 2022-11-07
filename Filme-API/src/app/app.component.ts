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

  constructor(private filmeService: FilmeAPIService) {
  }

  listarFilme() {
    this.filmeService.procurarFilme(550).subscribe(resultado => console.log(resultado))
  }
}
