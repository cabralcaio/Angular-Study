import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endereco } from '../interface/endereco';

@Injectable({
  providedIn: 'root'
})
export class ApiCepService {

  private readonly baseURL: string = "https://viacep.com.br/ws/09550600/json/"

  constructor(
    private http: HttpClient
  ) { }

  buscarCep() {
    return this.http.get<Endereco>(this.baseURL)
  }
}
