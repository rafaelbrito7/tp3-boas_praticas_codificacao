import { CPF } from '../modules/aluno/ValueObject/CPF';

export interface IAluno {
  nome: string;
  endereco: string;
  numeroCelular: string;
  matricula: string;
  email: string;
  cpf: CPF;
}
