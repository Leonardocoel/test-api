export interface IAstenService {
  api(service: string, payload: object): Promise<object>;
}
