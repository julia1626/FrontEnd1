import { Component, OnInit } from '@angular/core';
import { CurriculoService } from '../../service/curriculo.service';
import { Curriculo } from 'src/app/models/curriculo.model';

@Component({
  selector: 'app-curriculos',
  templateUrl: './curriculos.component.html',
  styleUrls: ['./curriculos.component.css'],
})
export class CurriculosComponent implements OnInit {
  public curriculos: Curriculo[] = [];

  constructor(private curriculoService: CurriculoService) {}

  // Ao iniciar o componente, listar
  ngOnInit(): void {
    this.listarCurriculos();
  }

  listarCurriculos(): void {
    this.curriculoService.getCurriculos().subscribe({
      next: (retorno: Curriculo[]) => {
        this.curriculos = retorno.map(
          (curriculo) => new Curriculo(curriculo.id, curriculo.usuarioId, curriculo.experiencia, curriculo.habilidades, curriculo.linkedin, curriculo.formacao)
        );
      },
      error: (err) => {
        console.error('Erro ao buscar vagas:', err);
      },
    });
  }

  carregarCurriculos(): void {
    this.curriculoService.getCurriculos().subscribe({
      next: (dados) => {
        this.curriculos = dados;
      },
      error: (err) => console.error('Erro ao carregar vagas:', err),
    });
  }
}
