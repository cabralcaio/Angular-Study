import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestarNumeroGuard implements CanActivate {
  //retornar true -> pode seguir
  //retornar false -> nao pode seguir

  canActivate(
    route: ActivatedRouteSnapshot, // objeto que permite recupera os parametros passados para a rota
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // saber se o id informado eh um numero ou nao
    // se for um numero -> pode seguir. senao nao segue
    

    //recuperar o parametro que guarda o valor do id
    const idProduto = route.paramMap.get("idProduto")

      if (isNaN(Number(idProduto))) { //se o numero eh um NaN
        return false
      }

      return true;
  }
  
}
