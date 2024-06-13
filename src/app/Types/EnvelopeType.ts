type EnvelopeType = {
  descricao: string;
  Repositorio: {
    id: number;
  };
  Documento: Array<object>;
};

type SignatarioEnvelope = {
  nome: string;
  email: string;
  Envelope: {
    id: number;
  };
};

export { EnvelopeType, SignatarioEnvelope };
