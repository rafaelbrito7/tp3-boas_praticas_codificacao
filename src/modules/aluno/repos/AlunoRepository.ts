import AlunoSchema from '../infra/models/AlunoSchema';
import { IAluno } from '../../../types/IAluno';
import { IAlunoRepository } from './IAlunoRepository';

class AlunoRepository implements IAlunoRepository {
  async armazena(aluno: IAluno): Promise<IAluno> {
    const novoAluno = await AlunoSchema.create(aluno);

    return novoAluno;
  }

  async remove(id: string): Promise<boolean> {
    await AlunoSchema.findByIdAndDelete(id);

    return true;
  }

  async encontraTodos(): Promise<IAluno[]> {
    const alunos = await AlunoSchema.find<IAluno>();

    return alunos;
  }

  async encontraUm(id: string): Promise<IAluno | null> {
    const aluno = await AlunoSchema.findOne({ where: { id } });

    return aluno;
  }

  async encontraPorEmail(email: string): Promise<IAluno | null> {
    const aluno = await AlunoSchema.findOne({ where: { email } });

    return aluno;
  }
}

export { AlunoRepository };
