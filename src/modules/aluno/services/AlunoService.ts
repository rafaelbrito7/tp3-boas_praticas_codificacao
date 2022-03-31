import AlunoSchema from "../infra/models/AlunoSchema";
import { DuplicatedEntityError } from "../../../errors/DuplicatedEntityError";
import { IAlunoRepository } from "../repos/IAlunoRepository";
import { IAlunoRequestDTO, IAlunoService  } from "./IAlunoService";

export class AlunoService implements IAlunoService {
    private alunoRepository: IAlunoRepository;

    constructor(alunoRepository: IAlunoRepository) {
      this.alunoRepository = alunoRepository;
    } 

    async cria({ nome, endereco, numeroCelular, matricula, email, cpf }: IAlunoRequestDTO) {
        const alunoExiste = await this.alunoRepository.encontraPorEmail(email);

        if(alunoExiste)
            throw new DuplicatedEntityError("Aluno existente!");

        const novoCpfFormatado = cpf.ValorFormatado(cpf.valor);
        
        const novoAluno = await AlunoSchema.create({ nome, endereco, numeroCelular, matricula, email, novoCpfFormatado});

        const aluno = await this.alunoRepository.armazena(novoAluno);

        return aluno;
    }   
}

