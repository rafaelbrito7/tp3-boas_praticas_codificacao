import mongoose from 'mongoose';

import { BaseError } from '../../../errors/BaseError';
import { IAluno } from '../../../types/entities/IAluno';
import AlunoSchema from '../infra/models/AlunoSchema';
import { BaseRepository } from './BaseRepository';

export class AlunoRepository extends BaseRepository<IAluno> {
  constructor() {
    super(AlunoSchema);
  }

  async recuperaPorMatricula(matricula: string): Promise<IAluno | null> {
    const result = await this._model.findOne({ matricula });

    return result?.toObject() as IAluno | null;
  }
}
