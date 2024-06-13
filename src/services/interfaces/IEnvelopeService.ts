export default interface IEnvelopeService {
  createEnvelope(envelope: object): object;
  insertSignatories(envelope: object): object;
  send(envelope: object): object;
  status(envelope: object): object;
}
