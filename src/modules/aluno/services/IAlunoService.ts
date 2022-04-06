import { IAluno } from '../../../types/entities/IAluno';

interface IAlunoRequestDTO {
  nome: string;
  endereco: string;
  numeroCelular: string;
  matricula: string;
  email: string;
}

interface IAlunoService {
  cria({
    nome,
    endereco,
    numeroCelular,
    matricula,
    email,
  }: IAlunoRequestDTO): Promise<IAluno>;
}

export { IAlunoRequestDTO, IAlunoService };
