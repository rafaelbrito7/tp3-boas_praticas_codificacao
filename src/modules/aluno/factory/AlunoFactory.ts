import { AlunoRepository } from "../repos/AlunoRepository";
import { AlunoService } from "../services/AlunoService";
import { AlunoController } from "../controllers/AlunoController";


export class AlunoFactory {
  private alunoRepository = new AlunoRepository();
  private alunoService = new AlunoService(this.alunoRepository);
  private alunoController = new AlunoController(this.alunoService);

  constructor(){
    
  };

  async lidaComNovoAluno() {
    return this.alunoController;
  }
}

/*
export const alunoFactory = () => {
  const alunoRepository = new AlunoRepository();
  const alunoService = new AlunoService(alunoRepository);
  const alunoController = new AlunoController(alunoService);
  return alunoController;
}
*/
    