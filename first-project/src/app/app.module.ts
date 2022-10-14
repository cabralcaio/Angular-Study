import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProdutoComponent } from './produto/produto.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    //declarations serve para registrar componentes, pipes, diretivas e outras estuturas
  declarations: [
    AppComponent,
    ProdutoComponent,
    NavbarComponent
  ],
  //Imports serve para registrar outros módulos dentro de outro módulo
  imports: [
    BrowserModule
  ],
  //providers serve para registrar serviços e interceptadores http
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
