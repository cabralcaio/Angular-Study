import { Component } from '@angular/core';
import { Endereco } from './interface/endereco';
import { ApiCepService } from './Service/api-cep.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cep-api';

  endereco!: Endereco
  numeroCep: string = ""

  constructor(
    private APIcep: ApiCepService
  ) {}

  pesquisaCep () {
    console.log("pesquisei")
    this.APIcep.buscarCep().subscribe(
      (enderecoPesquisado) => {
        this.endereco = enderecoPesquisado
        console.log(enderecoPesquisado)
      }
    )
  }

}
