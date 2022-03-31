import { Schema, model } from 'mongoose';

import { IAluno } from '../../../../types/IAluno';

const AlunoSchema = new Schema<IAluno>(
  {
    nome: {
      type: String,
      required: true,
      trim: true,
    },
    endereco: {
      type: String,
      required: true,
      trim: true,
    },
    numeroCelular: {
      type: String,
      required: true,
      trim: true,
    },
    matricula: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    cpf: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default model('Aluno', AlunoSchema);
