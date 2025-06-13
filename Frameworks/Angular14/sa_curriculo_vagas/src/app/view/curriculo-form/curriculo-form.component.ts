import { Component, OnInit } from '@angular/core';
import { CurriculoService } from '../../service/curriculo.service';
import { Curriculo } from 'src/app/models/curriculo.model';

@Component({
  selector: 'app-curriculo-form',
  templateUrl: './curriculo-form.component.html',
  styleUrls: ['./curriculo-form.component.css'],
})
export class CurriculoFormComponent implements OnInit {

  public curriculo: Curriculo = new Curriculo(0, 0, '', '', '', '');
  public curriculos: Curriculo[] = [];

  constructor(private curriculoService: CurriculoService) {}

  ngOnInit(): void {
    this.listarCurriculos();
  }

  listarCurriculos() {
    this.curriculoService.getCurriculos().subscribe((retornaCurriculo) => {
      this.curriculos = retornaCurriculo.map((curriculo) => {
        return new Curriculo(
          curriculo.id,
          curriculo.usuarioId,
          curriculo.formacao,
          curriculo.experiencia,
          curriculo.habilidades,
          curriculo.linkedin
        );
      });
    });
  }

  listarCurriculoUnico(curriculo: Curriculo) {
    this.curriculo = curriculo;
  }

  cadastrar() {
    this.curriculoService.cadastrarCurriculo(this.curriculo).subscribe(
      () => {
        this.curriculo = new Curriculo(0, 0, '', '', '', ''); // limpa o formulário
        this.listarCurriculos(); // atualiza a lista
      },
      (err) => {
        console.error('Erro ao Cadastrar', err);
      }
    );
  }

  atualizar(id: number) {
    this.curriculoService.atualizarCurriculo(id, this.curriculo).subscribe(
      () => {
        this.curriculo = new Curriculo(0, 0, '', '', '', '');
        this.listarCurriculos();
      },
      (err) => {
        console.error('Erro ao Atualizar', err);
      }
    );
  }

  excluir(id: number) {
    this.curriculoService.excluirCurriculo(id).subscribe(
      () => {
        this.listarCurriculos(); // Atualiza a lista após exclusão
      },
      (err) => {
        console.error('Erro ao Excluir', err);
      }
    );
  }
}
