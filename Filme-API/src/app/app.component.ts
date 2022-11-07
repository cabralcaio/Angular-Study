import { Component } from '@angular/core';
import { FilmeRepo } from './interfaces/filme-repo';
import { FilmeAPIService } from './services/filme-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;
  title = 'Filme-API';

  gFilme: FilmeRepo | undefined;

  constructor(private filmeService: FilmeAPIService) {
  }

  listarFilme() {
    this.filmeService.procurarFilme(550).subscribe(resultado => this.gFilme = resultado);
    console.log(this.gFilme)
    console.log(this.gFilme?.title)
  }
}
