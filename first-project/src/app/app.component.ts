import { Component } from '@angular/core';

//template url serve para informar ao componente qual arquivo
//HTML ele deve mostrar quando o mesmo ser utilizado
/*
* selector serve p informar como aquele componente podera
* ser chamado dentro de um projeto Angular dentro de outros
* arquivos html de outros componentes
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // serve para informar os caminhos dos arquivos CSS que o componente utilizará
})
export class AppComponent {
  title = 'first-project';
}
