import { Component, OnInit } from '@angular/core';
import { CurriculoService } from '../../service/curriculo.service';
import { Curriculo } from 'src/app/models/curriculo.model';

@Component({
  selector: 'app-curriculo-list',
  templateUrl: './curriculo-list.component.html',
  styleUrls: ['./curriculo-list.component.css'],
})
export class CurriculoListComponent implements OnInit {
  curriculos: Curriculo[] = [];

  constructor(private curriculoService: CurriculoService) {}

  ngOnInit(): void {
    this.carregarCurriculos();
  }

  carregarCurriculos(): void {
    this.curriculoService.getCurriculos().subscribe({
      next: (dados) => {
        this.curriculos = dados;
      },
      error: (err) => console.error('Erro ao carregar currículos:', err),
    });
  }
}
