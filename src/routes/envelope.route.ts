import express from "express";
import EnvelopeController from "../app/controllers/EnvelopeController";

const router = express.Router();

const envelopeController = new EnvelopeController();

router.post("/signatarios", (req, res) =>
  envelopeController.insertSignatories(req, res)
);

router.post("/", (req, res) => envelopeController.create(req, res));

router.post("/send", (req, res) => envelopeController.send(req, res));

router.post("/status", (req, res) => envelopeController.status(req, res));

export default router;
