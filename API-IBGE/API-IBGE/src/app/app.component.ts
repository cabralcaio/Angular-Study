import { Component } from '@angular/core';
import { Endereco } from './interface/endereco';
import { Estados } from './interface/estados';
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
  array1: object[] = []
  array2: object[] = []
  estados!: Estados
  arrayUf: any[] = []
  arrayCidades: any[] = []
  cidadeId!: string


  constructor(
    private APIcep: ApiCepService
  ) {}

  pesquisaCep () {
    console.log("pesquisei")
    this.APIcep.buscarCep().subscribe(
      (enderecoPesquisado) => {
        this.array1 = enderecoPesquisado
      }
    )
    
    this.array1.forEach(element => {
      this.estados = element
      this.arrayUf.push(this.estados.sigla)
    });

  }

  pesquisaCidade (uf: any) {
    console.log("pesquisei cidade" + uf)
    this.APIcep.buscarCidade(uf).subscribe(
      (cidadePesquisada) => {
        this.array2 = cidadePesquisada
      }
    )
    
    this.array2.forEach(element => {
      this.endereco = element
      this.arrayCidades.push(this.endereco.nome)
    });

  }

  // onAddCidade(uf: any){ // Função que foi chamada
  //   // this.cidadeId = +this.cidadeId;
  //   // console.log("estou no cidade compo... " + this.cidadeId); // Imprimiu o valor no Console log.
  //   // console.log(this.number) // outra forma de imprimir.
  //   this.pesquisaCidade(uf)
  // }

}
