export interface IMapping<D, F, R> {
  serialize: (data: R[]) => D[]
  deserialize: (data: D[]) => R[]
  validateRows?: (data: D, index: number, headerRow: number) => D
}
