import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CurriculoService } from '../../service/curriculo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Curriculo } from 'src/app/models/curriculo.model';

@Component({
  selector: 'app-curriculo-form',
  templateUrl: './curriculo-form.component.html',
  styleUrls: ['./curriculo-form.component.css'],
})
export class CurriculoFormComponent implements OnInit {

  // atributo
  public curriculo : Curriculo = new Curriculo(0,'','','','',0);
  
excluir(arg0: number|undefined) {
throw new Error('Method not implemented.');
}
listarCurriculoUnico(_t44: Curriculo) {
throw new Error('Method not implemented.');
}
  curriculoForm: FormGroup;
  curriculoId?: number;
  curriculos: Curriculo[] = [];

  constructor(
    private fb: FormBuilder,
    private curriculoService: CurriculoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // Definição do formulário com validações
    this.curriculoForm = this.fb.group({
      usuarioId: [1, Validators.required], // Simulando usuário logado
      formacao: ['', Validators.required],
      experiencia: ['', Validators.required],
      habilidades: ['', Validators.required],
      linkedin: [
        '',
        [Validators.required, Validators.pattern(/^https?:\/\/.+/)],
      ],
    });
  }

  ngOnInit(): void {
    // Obtendo o ID do currículo da URL de forma segura
    const idParam = this.route.snapshot.paramMap.get('id');
    this.curriculoId = idParam ? +idParam : undefined;

    if (this.curriculoId) {
      this.curriculoService
        .getCurriculoById(this.curriculoId)
        .subscribe((curriculo) => {
          if (curriculo) {
            this.curriculoForm.patchValue(curriculo);
          }
        });
    }
  }

  onSubmit(): void {
    if (this.curriculoForm.valid) {
      const curriculo: Curriculo = Object.assign({}, this.curriculoForm.value);

      if (this.curriculoId) {
        curriculo.id = this.curriculoId;
        this.curriculoService
          .atualizarCurriculo(curriculo.id, curriculo)
          .subscribe(() => {
            alert('Currículo atualizado com sucesso!');
            this.router.navigate(['/meu-curriculo']);
          });
      } else {
        this.curriculoService.cadastrarCurriculo(curriculo).subscribe(() => {
          alert('Currículo cadastrado com sucesso!');
          this.router.navigate(['/meu-curriculo']);
        });
      }
    }
  }
}
