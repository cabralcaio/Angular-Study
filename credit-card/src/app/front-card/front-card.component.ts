import { Component, Input, OnInit } from '@angular/core';
import { CartaoDeCredito } from '../interfaces/CartaoDeCredito';

@Component({
  selector: 'app-front-card',
  templateUrl: './front-card.component.html',
  styleUrls: ['./front-card.component.css']
})
export class FrontCardComponent implements OnInit {

  /**
   * O angular vai entender que a propriedade 'dadosCartao'
   * poderá receber valores externos ao componente, ou seja,
   * eu estando em outro componente conseguirei mudar o valor
   * da propriedade 'dadosCartao'
   */
  @Input()
  dadosCartao: CartaoDeCredito = {
    ano: "40",
    mes: "86",
    cv: "123",
    nome: "Caio Cabral",
    numero: "1234 5678 3548 4251"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
