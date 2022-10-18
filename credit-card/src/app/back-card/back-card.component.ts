import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-card',
  templateUrl: './back-card.component.html',
  styleUrls: ['./back-card.component.css']
})
export class BackCardComponent implements OnInit {
  n1: number = 300

  constructor() { }

  ngOnInit(): void {
  }

}
