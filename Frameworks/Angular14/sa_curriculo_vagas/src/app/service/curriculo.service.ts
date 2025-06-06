import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Curriculo } from 'src/app/models/curriculo.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CurriculoService {
  obterCurriculos(): any[] {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:3004/curriculos';

  constructor(private http: HttpClient) {}

  getCurriculosByUsuarioId(usuarioId: number): Observable<Curriculo[]> {
    return this.http
      .get<Curriculo[]>(`${this.apiUrl}?usuarioId=${usuarioId}`)
      .pipe(catchError(this.handleError));
  }

  getCurriculoById(id: number): Observable<Curriculo> {
    return this.http
      .get<Curriculo>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  getCurriculos(): Observable<Curriculo[]> {
    return this.http
      .get<Curriculo[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  cadastrarCurriculo(curriculo: Curriculo): Observable<Curriculo> {
    return this.http
      .post<Curriculo>(this.apiUrl, curriculo)
      .pipe(catchError(this.handleError));
  }

  atualizarCurriculo(id: number, curriculo: Curriculo): Observable<Curriculo> {
    return this.http
      .put<Curriculo>(`${this.apiUrl}/${id}`, curriculo)
      .pipe(catchError(this.handleError));
  }

  removerCurriculo(id: number): Observable<void> {
    return this.http
      .delete<void>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    console.error('Erro na requisição:', error);
    return throwError(() => new Error('Erro na comunicação com o servidor.'));
  }
}
