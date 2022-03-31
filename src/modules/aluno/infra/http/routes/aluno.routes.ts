import { Router, Request, Response } from 'express';

import { alunoFactory } from '../../../factory/AlunoFactory';

const alunoRouter = Router();

alunoRouter.post('/', async (request: Request, response: Response) => {
  console.log('hello testing');
  alunoFactory().recebeNovoAluno(request, response);
});

export { alunoRouter };
