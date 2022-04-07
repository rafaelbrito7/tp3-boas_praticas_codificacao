import { Router, Request, Response } from 'express';

import { ElementosEscolaresFactory } from '../../../../../factories/ElementosEscolaresFactory';

const alunoFactory = ElementosEscolaresFactory.pegaElementoEscolar('aluno');

const alunoRouter = Router();

alunoRouter.post('/', async (request: Request, response: Response) => {
  await alunoFactory.recebeNovoAluno(request, response);
});

export { alunoRouter };
