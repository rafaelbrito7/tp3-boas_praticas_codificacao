import { IAluno } from '../../../types/IAluno';
import { CPF } from '../ValueObject/CPF';

interface IAlunoRequestDTO {
  nome: string;
  endereco: string;
  numeroCelular: string;
  matricula: string;
  email: string;
  cpf: CPF;
}

interface IAlunoService {
  cria({
    nome,
    endereco,
    numeroCelular,
    matricula,
    email,
    cpf,
  }: IAlunoRequestDTO): Promise<IAluno>;
}

export { IAlunoRequestDTO, IAlunoService };
