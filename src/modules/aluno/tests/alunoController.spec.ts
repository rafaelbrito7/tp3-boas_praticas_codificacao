/**
 * @jest-environment ./src/infra/config/mongoose/mongoose-environment-jest
 */

import request from 'supertest';

import { app } from '../../../infra/config/app';
import AlunoSchema from '../infra/models/AlunoSchema';
import { AlunoRepository } from '../repos/AlunoRepository';
import { AlunoService } from '../services/AlunoService';

jest.setTimeout(10000000);

describe('Unitário alunos', () => {
  it('deve ser possível criar um novo aluno', async () => {
    const alunoService = new AlunoService(new AlunoRepository());

    const novoAluno = new AlunoSchema({
      nome: 'Teste da Silva',
      endereco: 'Rua do Teste, 123',
      numeroCelular: '+5521999999999',
      matricula: '123123123',
      email: 'testing@test.com',
    });

    const resultado = await alunoService.cria(novoAluno);

    console.log(resultado);

    expect(resultado).toHaveProperty('_id');
  });
});

describe('Integração alunos', () => {
  it('deve ser possível criar um novo aluno', async () => {
    const response = await request(app).post('/alunos').send({
      nome: 'Teste da Silva',
      endereco: 'Rua do Teste, 123',
      numeroCelular: '+5521999999999',
      matricula: '123123123',
      email: 'testing@test.com',
    });

    console.log(response.body);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('_id');
  });

  it('não deve ser possível criar um aluno repetido', async () => {
    await request(app).post('/alunos').send({
      nome: 'Teste Existente',
      endereco: 'Rua do Teste Existente, 123',
      numeroCelular: '+5521999999999',
      matricula: '999999',
      email: 'teste.existente@email.com',
      cpf: '999.999.999-99',
    });

    const response = await request(app).post('/alunos').send({
      nome: 'Teste Existente',
      endereco: 'Rua do Teste Existente, 123',
      numeroCelular: '+5521999999999',
      matricula: '999999',
      email: 'teste.existente@email.com',
      cpf: '999.999.999-99',
    });

    console.log(response.body);

    expect(response.status).toBe(409);
    expect(response.body.message).toBe('Aluno já cadastrado');
  });
});
