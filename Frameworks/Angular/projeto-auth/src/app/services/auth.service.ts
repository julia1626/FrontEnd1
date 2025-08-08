import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, switchMap, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //atributos
  private apiUrl = 'http://localhost:3004/usuarios';
  private readonly CHAVE_AUTH = 'usuarioLogado';

  constructor(private router: Router, private http: HttpClient) { }

  registrar(usuario:any):Observable<any>{
    // primeiro busca no banco se email do cadastro já existe
    return this.http.get<any[]>(`${this.apiUrl}?email=${usuario.email}`).pipe(
      switchMap(usuarios => {
        if(usuarios.length>0){ //caso exista
          //cria uma mensagem de erro para ser tratada no try/catch
          return throwError (()=> new Error("Usuário Já Cadastrado"));
        }else{ //caso não exista
          //cadastra o usuario no BD
          return this.http.post<any>(this.apiUrl, usuario);
        }
      })
    )
  }

  login(credenciais: any): Observable<boolean>{
    //pega as credenciais do usuário (email e senha)
    return this.http.get<any[]>(
      //verifica no BD se email e senha foram encontrados
      `${this.apiUrl}?email=${credenciais.email}&senha=${credenciais.senha}`).pipe(
        map(usuarios => {
          if(usuarios.length>0){ //se for encontrado
            //armazena as informações do usuário e a chave no localStorage
            localStorage.setItem(this.CHAVE_AUTH, JSON.stringify(usuarios[0]));
            //retorna que o acesso foi permitido
            return true;
          }else{ //caso ão encontrado
            // fazer um erro
            //retorno que meu usuário não está permitido o acesso
            return false;
          }
        })
      )
  }

  logout(){
    localStorage.removeItem(this.CHAVE_AUTH); //remove a chave de autenticação do usuario
    this.router.navigate(['/home']); //redireciona para a página home
  }

  //verificar se o usuário já está logado ( CHAVE_AUTH)
  estaAutenticado():boolean{
    // vou transformar uma variavel do tipo Texto em Boolean
    return !!localStorage.getItem(this.CHAVE_AUTH) //vai retornar true ou false
  }

  //pegar as informações do usuário no LocalStorage
  getUsuarioAtual(): any{
    //retorna as infromações do usuário autenticad, que estão armazenadas no LocalStorage
    return JSON.parse(localStorage.getItem(this.CHAVE_AUTH) || "{}");
  }
}
