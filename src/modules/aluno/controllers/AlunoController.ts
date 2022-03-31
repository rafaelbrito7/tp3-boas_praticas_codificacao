import { Request, Response } from "express";
import { IAlunoService } from '../services/IAlunoService';
import { CPF } from '../ValueObject/CPF';


export class AlunoController {
  private alunoService: IAlunoService;

  constructor (alunoService: IAlunoService) {
    this.alunoService = alunoService;
  }

  async recebeNovoAluno(request: Request, response: Response) {
    const { nome, endereco, numeroCelular, matricula, email, cpf } = request.body;

    const novoCPF = new CPF(cpf);

    const aluno = await this.alunoService.cria({ nome, endereco, numeroCelular, matricula, email, cpf: novoCPF });

    return response.json(aluno);
  };
}
