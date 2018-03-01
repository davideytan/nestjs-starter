
export class PaginatedData<T = any> {

  constructor(
    readonly data: T[],
    readonly offset: number = 0,
    readonly limit: number = 0,
    readonly total: number = data.length,
  ) {}

}