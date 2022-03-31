import { IAluno } from '../../../types/IAluno';

interface IAlunoRepository {
  armazena(aluno: IAluno): Promise<IAluno>;
  encontraTodos(): Promise<IAluno[]>;
  encontraUm(id: string): Promise<IAluno | null>;
  encontraPorEmail(email: string): Promise<IAluno | null>;
  remove(id: string): Promise<boolean>;
}

export { IAlunoRepository };
