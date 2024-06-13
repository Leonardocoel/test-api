import { Request, Response } from "express";
import IEnvelopeService from "../../services/interfaces/IEnvelopeService";
import createError from "http-errors";
import EnvelopeService from "../../services/EnvelopeService";

export default class EnvelopeController {
  private envelopeService: IEnvelopeService = new EnvelopeService();

  public async create(req: Request, res: Response): Promise<object> {
    const envelope = req.body;

    if (!envelope) throw new createError.BadRequest("Envelope data missing");

    const data = await this.envelopeService.createEnvelope(envelope);
    return res.status(201).json(data);
  }

  public async insertSignatories(req: Request, res: Response): Promise<object> {
    const envelope = req.body;

    if (!envelope) throw new createError.BadRequest("Envelope data missing");

    const data = await this.envelopeService.insertSignatories(envelope);
    return res.status(201).json(data);
  }

  public async send(req: Request, res: Response): Promise<object> {
    const envelope = req.body;

    if (!envelope) throw new createError.BadRequest("Envelope data missing");

    const data = await this.envelopeService.send(envelope);
    return res.status(201).json(data);
  }

  public async status(req: Request, res: Response): Promise<object> {
    const envelope = req.body;

    if (!envelope) throw new createError.BadRequest("Envelope data missing");

    const data = await this.envelopeService.status(envelope);
    return res.status(201).json(data);
  }
}
