import { Schema, model } from 'mongoose';

const AlunoSchema = new Schema(
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
    email: {
      type: String,
      required: true,
      trim: true,
    },
    matricula: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

export default model('Aluno', AlunoSchema);
