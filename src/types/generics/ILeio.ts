export interface ILeio<T> {
  encontraTodos(): Promise<T[]>;
  encontraUm(id: string): Promise<T | null>;
}
