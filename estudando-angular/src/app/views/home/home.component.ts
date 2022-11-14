import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() { }

  public user: string = "Caio Cabral"

  public image: any = {
    src: "https://avatars.githubusercontent.com/u/104773390?v=4",
    alt: "Foto de perfil Caio"
  }

}
