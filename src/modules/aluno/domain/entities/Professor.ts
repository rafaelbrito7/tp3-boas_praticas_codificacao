import { IProfessor } from '../../../../types/entities/IProfessor';

export class Professor {
  private _professor: IProfessor;

  constructor(professor: IProfessor) {
    this._professor = professor;
  }

  get nome(): string {
    return this._professor.nome;
  }

  get endereco(): string {
    return this._professor.endereco;
  }

  get numeroCelular(): string {
    return this._professor.numeroCelular;
  }

  get email(): string {
    return this._professor.email;
  }

  get cpf(): string {
    return this._professor.cpf.valor;
  }
}

Object.seal(Professor);
