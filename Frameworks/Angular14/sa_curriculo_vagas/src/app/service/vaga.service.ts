import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vaga } from '../models/vaga.model';

@Injectable({
  providedIn: 'root',
})
export class VagaService {
  // Caminho para a API
  private apiUrl = 'http://localhost:3004/vagas';

  constructor(private http: HttpClient) {}

  // Obter lista de vagas (GET)
  getVagas(): Observable<Vaga[]> {
    return this.http.get<Vaga[]>(this.apiUrl);
  }

  // Cadastrar uma nova vaga (POST)
  cadastrarVaga(vaga: Vaga): Observable<Vaga> {
    return this.http.post<Vaga>(this.apiUrl, vaga);
  }

  // Atualizar uma vaga (PUT)
  atualizarVaga(id: number, vaga: Vaga): Observable<Vaga> {
    const urlAtualizar = `${this.apiUrl}/${id}`;
    return this.http.put<Vaga>(urlAtualizar, vaga);
  }

  // Remover uma vaga (DELETE)
  removerVaga(id: number): Observable<void> {
    const urlDeletar = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(urlDeletar);
  }
}
