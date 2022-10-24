import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produto } from '../interfaces/Produto';

@Component({
  selector: 'produto-card',
  templateUrl: './produto-card.component.html',
  styleUrls: ['./produto-card.component.css']
})
export class ProdutoCardComponent implements OnInit {

  @Input()
  prod: Produto = {
    descricao: '',
    estoque: 0,
    imagem: '',
    nome: '',
    preco: 0
  }

  mostrarProduto: boolean = true

  mostrarPdt (): void {
    this.mostrarProduto = true
  }

  @Output()
  callArray = new EventEmitter();

  chamarEvento (){
    let teste1: String = "testee1"
    this.callArray.emit(null)
  }

  constructor() { }

  ngOnInit(): void {
  }

  esconderProduto() {
    this.mostrarProduto = false
  }
}
