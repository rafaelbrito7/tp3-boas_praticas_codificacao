import { AlunoController } from '../controllers/AlunoController';
import { AlunoRepository } from '../repos/AlunoRepository';
import { AlunoService } from '../services/AlunoService';

export class ElementosEscolaresFactory {
  static pegaElementoEscolar(tipo: string) {
    switch (tipo) {
      case 'aluno':
        return new AlunoController(new AlunoService(new AlunoRepository()));
      default:
        throw new Error('Tipo de elemento escolar não encontrado');
    }
  }
}

// export const alunoFactory = () => {
//   const alunoRepository = new AlunoRepository();
//   const alunoService = new AlunoService(alunoRepository);
//   const alunoController = new AlunoController(alunoService);
//   return alunoController;
// };
