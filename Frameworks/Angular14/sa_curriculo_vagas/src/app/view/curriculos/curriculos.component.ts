import { Component, OnInit } from '@angular/core';
import { CurriculoService } from '../../service/curriculo.service';

@Component({
  selector: 'app-curriculos',
  templateUrl: './curriculos.component.html',
  styleUrls: ['./curriculos.component.css'],
})
export class CurriculosComponent implements OnInit {
  curriculos: any[] = [];

  constructor(private CurriculoService: CurriculoService) {}

  ngOnInit() {
    this.curriculos = this.CurriculoService.obterCurriculos();
  }
}
