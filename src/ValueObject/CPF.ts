export class CPF {
  private _valor: string;

  constructor(valor: string) {
    this.valor = valor;
  }

  get valor(): string {
    return this._valor;
  }

  set valor(valor: string) {
    this._valor = valor;
  }

  formatarCPF(valor: string): string {
    const cpf = valor.replace(/[^\d]+/g, '').trim();

    if (cpf === '' || cpf.length !== 11) {
      return 'CPF inválido';
    }

    return cpf;
  }
}
