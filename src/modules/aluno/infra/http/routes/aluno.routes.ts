import { Router, Request, Response } from 'express';
import { AlunoFactory } from '../../../factory/AlunoFactory';

const alunoRouter = Router();
const alunoFactory = new AlunoFactory();

alunoRouter.post('/', async (request: Request, response: Response) => 
  alunoFactory.lidaComNovoAluno()
);

export { alunoRouter };
