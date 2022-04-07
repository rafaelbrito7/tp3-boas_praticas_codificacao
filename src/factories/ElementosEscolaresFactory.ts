import { AlunoController } from '../modules/aluno/controllers/AlunoController';
import { AlunoRepository } from '../modules/aluno/repos/AlunoRepository';
import { AlunoService } from '../modules/aluno/services/AlunoService';

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
