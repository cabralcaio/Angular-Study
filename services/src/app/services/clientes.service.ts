import { Injectable } from '@angular/core';

/**
 * providedIn informa onde o serviço será fornecido
 */

/**
 * A ideia de uma serviço no Angular
 * é encapsular alguma lógica q pode
 * ser utilizada em vários locais
 * da sua aplicação
 */

interface Cliente {
  nome: string
  sobrenome: string
  telefone: string
  id: number
  email: string
  cpf: string
}

// C -> Create 
// R -> Read 
// U -> Update 
// D -> Delete 


@Injectable({
  providedIn: 'root' // faz referencia ao AppModule
})
export class ClientesService {

  private clientes: Cliente[] = [
    {
      nome: "Fredizin",
      sobrenome: "alemao",
      cpf: "11111111111",
      email: "feasd@gmail.com",
      telefone: "405055879",
      id: 0
    },
    {
      nome: 'Frederico',
      sobrenome: 'Alves',
      cpf: '11111111111',
      email: 'frealves@gmail.com',
      telefone: '40028922',
      id: 1
    },
    {
      nome: 'José',
      sobrenome: 'Almir',
      cpf: '22222222222',
      email: 'jose.almir@soulcodeacademy.org',
      telefone: '40028922',
      id: 2
    },
    {
      nome: 'Renato',
      sobrenome: 'Pereira',
      cpf: '33333333333',
      email: 'renato.pereira@soulcodeacademy.org',
      telefone: '40028922',
      id: 3
    }
  ]

  constructor() { }

  listarClientes(): Cliente[] {
    // toda a logica pra acessar a api e pegar os dados
    return this.clientes
  }

  listarClientePeloId(id: number): Cliente | undefined {
    // o metodo find dos arrays serve para procurar o valor dentro do array

    const clienteEncontrado = this.clientes.find((c) => {
      return c.id == id
    });
    return clienteEncontrado
  }

}
