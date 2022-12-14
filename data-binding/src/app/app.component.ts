import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //String interpolation: Utilizar valores que propriedades possuem para mostrar ao usuario
  /* property-binding: utilizar valores de propriedades para atribuí-los a atributos HTML
  *
  */
  
  title = 'Angular é muito bom!';
  n1: number = 300
  n2: number = 500
  tipoInput: string = "text"
  count: number = 1;

  somar(x: number, y: number) {
    return x + y
  }

  mudarTipoDoInput(): void {
    if (this.tipoInput == "password"){
      this.tipoInput = "text"
    } else {
      this.tipoInput = "password"
    }
  }

  mais() {
    this.count = this.count + 1
    return this.count
  }
  menos() {
    if (this.count <= 0) {
      return this.count
    }
    this.count = this.count - 1
    return this.count
  }

}
