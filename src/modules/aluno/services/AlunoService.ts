import { DuplicatedEntityError } from '../../../errors/DuplicatedEntityError';
import AlunoSchema from '../infra/models/AlunoSchema';
import { IAlunoRepository } from '../repos/IAlunoRepository';
import { IAlunoRequestDTO, IAlunoService } from './IAlunoService';

export class AlunoService implements IAlunoService {
  private alunoRepository: IAlunoRepository;

  constructor(alunoRepository: IAlunoRepository) {
    this.alunoRepository = alunoRepository;
  }

  async cria({
    nome,
    endereco,
    numeroCelular,
    matricula,
    email,
    cpf,
  }: IAlunoRequestDTO) {
    const novoCpfFormatado = cpf.ValorFormatado(cpf.valor);

    const verificaEmailDuplicado = await this.alunoRepository.encontraPorEmail(
      email,
    );

    const verificaCPFDuplicado = await this.alunoRepository.encontraPorCPF(
      novoCpfFormatado,
    );

    if (verificaEmailDuplicado || verificaCPFDuplicado)
      throw new DuplicatedEntityError('Aluno existente!');

    const novoAluno = await AlunoSchema.create({
      nome,
      endereco,
      numeroCelular,
      matricula,
      email,
      cpf: novoCpfFormatado,
    });

    const aluno = await this.alunoRepository.armazena(novoAluno);

    return aluno;
  }
}
