export class Curriculo {
  id?: number;
  usuarioId: number;
  formacao: string;
  experiencia: string;
  habilidades: string;
  linkedin: string;

  constructor(
    usuarioId: number,
    formacao: string,
    experiencia: string,
    habilidades: string,
    linkedin: string,
    id?: number
  ) {
    this.usuarioId = usuarioId;
    this.formacao = formacao;
    this.experiencia = experiencia;
    this.habilidades = habilidades;
    this.linkedin = linkedin;
    this.id = id;
  }
}
