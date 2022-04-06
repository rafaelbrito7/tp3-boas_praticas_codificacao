export interface IEscrevo<T> {
  armazena(item: T): Promise<T>;
  atualiza(item: T): Promise<T>;
  remove(id: string): Promise<boolean>;
}
