import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
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

  //Injetar um objeto que permite o roteamento dentro da agina de forma automatica

  constructor(
    private produtoService: ProdutosApiService,
    private snackbar: MatSnackBar, // Componente de mensagens do Material
    private router: Router// objeto que permite fazer o roteamento dentro do arquivo TS  
  ) { }

  ngOnInit(): void {
  }

  salvarProduto() {
    //recuperar os dados do formulario
    const produto: Produto = this.produtoForm.value // retorna um objeto com as informacoes do formGroup
    this.produtoService.criarProduto(produto).subscribe(
      (prod) => {
        console.log(prod)
        this.snackbar.open("Produto salvo com sucesso", "ok", {
          duration: 5000, // tempo de duracao do snackbar
          horizontalPosition: "left" // escolher a posicao do snack
        })// abrir no snackbar
        this.router.navigateByUrl("/produtos") // redirecionamento do usuario para a pagina produtos
        // Desafio: Substituir o alert pela snackbar do Material
      }
    )
  }

}
