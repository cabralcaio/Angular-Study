import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Caracteristicas } from './interfaces/caracteristicas';
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

  githubForm: FormGroup = this.fb.group({
    filmeName: ["", [Validators.required]]
  })

  filmeName = this.githubForm.get('username')?.value

  gFilme!: FilmeRepo;
  film!: Caracteristicas;
  array1: Caracteristicas[] = [];


  constructor(private filmeService: FilmeAPIService, private fb: FormBuilder) {
  }

  listarFilme() {
    this.filmeName = this.githubForm.get('filmeName')?.value
    this.filmeService.procurarFilme(this.filmeName).subscribe(
      (resultado) => {
      this.gFilme = resultado
      this.gFilme.results.forEach(movie => {
        this.film = movie
        this.array1.push(this.film)
        console.log(this.array1)
      })
      }
      );
    this.film
  }
}
