import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './view/inicio/inicio.component';
import { CurriculosComponent } from './view/curriculos/curriculos.component';
import { VagasComponent } from './view/vagas/vagas.component';
import { PainelVagasComponent } from './view/painel-vagas/painel-vagas.component';
import { CurriculoFormComponent } from './view/curriculo-form/curriculo-form.component';
import { CurriculoListComponent } from './view/curriculo-list/curriculo-list.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'curriculos', component: CurriculosComponent },
  { path: 'vagas', component: VagasComponent },
  { path: 'curriculos', component: CurriculosComponent },
  { path: 'painel-vagas', component: PainelVagasComponent },
  { path: 'curriculo-form', component: CurriculoFormComponent },
  { path: 'curriculo-list', component: CurriculoListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
