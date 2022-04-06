import { IAluno } from '../../../../types/entities/IAluno';

export class Aluno {
  private _aluno: IAluno;

  constructor(aluno: IAluno) {
    this._aluno = aluno;
  }

  get nome(): string {
    return this._aluno.nome;
  }

  get endereco(): string {
    return this._aluno.endereco;
  }

  get numeroCelular(): string {
    return this._aluno.numeroCelular;
  }

  get email(): string {
    return this._aluno.email;
  }

  get matricula(): string {
    return this._aluno.matricula;
  }
}

Object.seal(Aluno);
