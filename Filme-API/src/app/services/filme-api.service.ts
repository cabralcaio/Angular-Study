import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FilmeRepo } from '../interfaces/filme-repo';

@Injectable({
  providedIn: 'root'
})
export class FilmeAPIService {

  private readonly baseURL: string = "https://api.themoviedb.org/3/movie/"
  private readonly apiKey: string = "?api_key=328bda88946184d02e2280add99ac82a"
  static procurarFilme: any;

  constructor(
    private http: HttpClient
  ) { }

  procurarFilme(idFilme: number) {
    return this.http.get<FilmeRepo>(`${this.baseURL}${idFilme}${this.apiKey}`)
  }

}
