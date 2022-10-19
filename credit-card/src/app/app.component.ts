import { Component, Input } from '@angular/core';
import { CartaoDeCredito } from './interfaces/CartaoDeCredito';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formCartaoDeCredito: CartaoDeCredito = {
    ano: "",
    cv: "",
    mes: "",
    nome: "",
    numero: ""
  }

  @Input()
  n1: number = 300
}
