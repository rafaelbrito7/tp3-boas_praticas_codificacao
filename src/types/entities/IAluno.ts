import mongoose from 'mongoose';

export interface IAluno extends mongoose.Document {
  nome: string;
  endereco: string;
  numeroCelular: string;
  email: string;
  matricula: string;
}
