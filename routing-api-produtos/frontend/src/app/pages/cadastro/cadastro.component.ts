import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Produto } from 'src/app/interfaces/Produto';
import { ProdutosApiService } from 'src/app/services/produtos-api.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  produtoForm: FormGroup = new FormGroup({ // coleta em conjunto todos os campos do form 
    nome: new FormControl("", [Validators.required]),
    preco: new FormControl("", [Validators.required]),
    descricao: new FormControl("", [Validators.required]),
    foto: new FormControl("")
  })

  constructor(
    private produtoService: ProdutosApiService
  ) { }

  ngOnInit(): void {
  }

  salvarProduto() {
    //recuperar os dados do formulario
    const produto: Produto = this.produtoForm.value // retorna um objeto com as informacoes do formGroup
    this.produtoService.criarProduto(produto).subscribe(
      (prod) => {
        console.log(prod)
        alert("Produto salvo com sucesso")
        // Desafio: Substituir o alert pela snackbar do Material
      }
    )
  }

}
