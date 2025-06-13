import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curriculo } from 'src/app/models/curriculo.model';

@Injectable({
  providedIn: 'root',
})
export class CurriculoService {
  // Caminho para a API
  private apiUrl = 'http://localhost:3004/curriculos';

  constructor(private http: HttpClient) {}

  getCurriculos(): Observable<Curriculo[]> {
    return this.http.get<Curriculo[]>(this.apiUrl);
  }

  cadastrarCurriculo(curriculo: Curriculo): Observable<Curriculo[]> {
    return this.http.post<Curriculo[]>(this.apiUrl, curriculo);
  }

  atualizarCurriculo(
    id: number,
    curriculo: Curriculo
  ): Observable<Curriculo[]> {
    const urlAtualizar = `${this.apiUrl}/${id}`;
    return this.http.put<Curriculo[]>(urlAtualizar, curriculo);
  }

  excluirCurriculo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/curriculos/${id}`);
  }
}
