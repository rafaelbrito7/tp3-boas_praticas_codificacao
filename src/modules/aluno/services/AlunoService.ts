import { DuplicatedEntityError } from '../../../errors/DuplicatedEntityError';
import AlunoSchema from '../infra/models/AlunoSchema';
import { AlunoRepository } from '../repos/AlunoRepository';
import { IAlunoRequestDTO, IAlunoService } from './IAlunoService';

export class AlunoService implements IAlunoService {
  private alunoRepository: AlunoRepository;

  constructor(alunoRepository: AlunoRepository) {
    this.alunoRepository = alunoRepository;
  }

  async cria({
    nome,
    endereco,
    numeroCelular,
    matricula,
    email,
  }: IAlunoRequestDTO) {
    const verificaSeAlunoExiste =
      await this.alunoRepository.recuperaPorMatricula(matricula);

    if (verificaSeAlunoExiste) {
      throw new DuplicatedEntityError('Aluno já cadastrado');
    }

    const novoAluno = new AlunoSchema({
      nome,
      endereco,
      numeroCelular,
      email,
      matricula,
    });

    const resultado = await this.alunoRepository.armazena(novoAluno);

    return resultado;
  }
}
