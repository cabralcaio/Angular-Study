import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endereco } from '../interface/endereco';

@Injectable({
  providedIn: 'root'
})
export class ApiCepService {

  private readonly baseURL: string = "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
  private readonly baseURL2: string = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/SP/municipios"

  constructor(
    private http: HttpClient
  ) { }

  buscarCep() {
    return this.http.get<object[]>(this.baseURL)
  }

  buscarCidade(uf: any) {
    return this.http.get<object[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
  }
}
