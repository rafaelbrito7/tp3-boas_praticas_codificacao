import mongoose from 'mongoose';

import { CPF } from '../../modules/aluno/ValueObject/CPF';

export interface IProfessor extends mongoose.Document {
  nome: string;
  endereco: string;
  numeroCelular: string;
  email: string;
  cpf: CPF;
}
