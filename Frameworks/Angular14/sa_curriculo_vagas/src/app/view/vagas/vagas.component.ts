import { Component, OnInit } from '@angular/core';
import { Vaga } from 'src/app/models/vaga.model';
import { VagaService } from 'src/app/service/vaga.service';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.scss'],
})
export class VagasComponent implements OnInit {
  excluir(arg0: number) {
    throw new Error('Método errado');
  }
  public vagas: Vaga[] = []; // vetor para armazenar as vagas

  constructor(private vagaService: VagaService) {}

  // Ao iniciar o componente, listar as vagas
  ngOnInit(): void {
    this.listarVagas();
  }

  listarVagas(): void {
    this.vagaService.getVagas().subscribe({
      next: (retorno: Vaga[]) => {
        this.vagas = retorno.map(
          (v) => new Vaga(v.id, v.nome, v.foto, v.descricao, v.salario)
        );
      },
      error: (err) => {
        console.error('Erro ao buscar vagas:', err);
      },
    });
  }

  carregarVagas(): void {
    this.vagaService.getVagas().subscribe({
      next: (dados) => {
        this.vagas = dados;
      },
      error: (err) => console.error('Erro ao carregar vagas:', err),
    });
  }
}
