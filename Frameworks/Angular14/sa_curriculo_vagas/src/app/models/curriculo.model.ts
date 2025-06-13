export class Curriculo {
  id: number =0;
  usuarioId: number;
  formacao: string;
  experiencia: string;
  habilidades: string;
  linkedin: string;

  constructor(
    id: number,
    usuarioId: number,
    formacao: string,
    experiencia: string,
    habilidades: string,
    linkedin: string,
  ) {
    this.id = id;
    this.usuarioId = usuarioId;
    this.formacao = formacao;
    this.experiencia = experiencia;
    this.habilidades = habilidades;
    this.linkedin = linkedin;
  }
}