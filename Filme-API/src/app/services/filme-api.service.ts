import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Caracteristicas } from '../interfaces/caracteristicas';
import { FilmeRepo } from '../interfaces/filme-repo';

@Injectable({
  providedIn: 'root'
})
export class FilmeAPIService {

  //link para API de busca
  //https://api.themoviedb.org/3/search/movie?api_key=328bda88946184d02e2280add99ac82a&language=pt-BR&query=shrek
  private readonly baseURL: string = "https://api.themoviedb.org/3/search/movie"
  private readonly apiKey: string = "?api_key=328bda88946184d02e2280add99ac82a"
  private readonly search: string = "&language=pt-BR&query="
  static procurarFilme: any;

  

  constructor(
    private http: HttpClient
  ) { }

  procurarFilme(idFilme: string) {
    return this.http.get<FilmeRepo>(`${this.baseURL}${this.apiKey}${this.search}${idFilme}`)
    //return this.http.get<FilmeRepo>(`${this.baseURL}${idFilme}${this.apiKey}`)
  }

}
