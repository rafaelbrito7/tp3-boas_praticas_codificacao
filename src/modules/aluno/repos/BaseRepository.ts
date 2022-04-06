import mongoose from 'mongoose';

import { IEscrevo } from '../../../types/generics/IEscrevo';
import { ILeio } from '../../../types/generics/ILeio';

export abstract class BaseRepository<T extends mongoose.Document>
  implements IEscrevo<T>, ILeio<T>
{
  public _model: mongoose.Model<mongoose.Document>;

  constructor(schemaModel: mongoose.Model<mongoose.Document>) {
    this._model = schemaModel;
  }

  async armazena(item: T): Promise<T> {
    const result = await this._model.create(item);

    return result.toObject() as T;
  }

  async encontraTodos(): Promise<T[]> {
    throw new Error('Method not implemented.');
  }

  encontraUm(id: string): Promise<T | null> {
    throw new Error('Method not implemented.');
  }

  encontraPorCPF(cpf: string): Promise<T | null> {
    throw new Error('Method not implemented.');
  }

  remove(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  atualiza(item: T): Promise<T> {
    throw new Error('Method not implemented.');
  }
}
