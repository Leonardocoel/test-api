import { Repository } from "typeorm";
import { EnvelopeType, SignatarioEnvelope } from "../app/Types/EnvelopeType";
import AstenService from "./AstenService";
import { IAstenService } from "./interfaces/IAstenService";
import IEnvelopeService from "./interfaces/IEnvelopeService";
import { Envelope } from "../database/entities/Envelope";
import { MysqlDataSource } from "../database/data-source";

export default class EnvelopeService implements IEnvelopeService {
  private astenService: IAstenService = new AstenService();
  private EnvelopeRepository: Repository<Envelope> =
    MysqlDataSource.getRepository(Envelope);

  public async createEnvelope(envelope: EnvelopeType): Promise<object> {
    const SERVICE_NAME = "inserirEnvelope";

    const data = {
      Envelope: {
        descricao: envelope.descricao,
        Repositorio: envelope.Repositorio,
        mensagem: null,
        mensagemObservadores: null,
        mensagemNotificacaoSMS: null,
        dataExpiracao: null,
        horaExpiracao: null,
        usarOrdem: "S",
        ConfigAuxiliar: {
          documentosComXMLs: "N",
          urlCarimboTempo: null,
        },
        listaDocumentos: {
          Documento: envelope.Documento,
        },
        listaSignatariosEnvelope: {
          SignatarioEnvelope: [],
        },
        listaObservadores: {
          Observador: [],
        },
        listaTags: {
          Tag: [],
        },
        listaInfoAdicional: {
          InfoAdicional: [],
        },
        incluirHashTodasPaginas: "S",
        permitirDespachos: "S",
        ignorarNotificacoes: "N",
        ignorarNotificacoesPendentes: "N",
        qrCodePosLeft: null,
        qrCodePosTop: null,
        dataIniContrato: null,
        dataFimContrato: null,
        objetoContrato: null,
        numContrato: null,
        valorContrato: null,
        descricaoContratante: null,
        descricaoContratado: null,
        bloquearDesenhoPaginas: "S",
      },
      gerarTags: "S",
      encaminharImediatamente: "N",
      detectarCampos: "N",
      verificarDuplicidadeConteudo: "N",
      processarImagensEmSegundoPlano: "N",
    };

    const result = await this.astenService.api(SERVICE_NAME, data);

    return result;
  }

  public async insertSignatories(
    signatario: SignatarioEnvelope
  ): Promise<object> {
    const SERVICE_NAME = "inserirSignatarioEnvelope";

    const data = {
      SignatarioEnvelope: {
        Envelope: signatario.Envelope,
        ordem: 1,
        tagAncoraCampos: null,
        ConfigAssinatura: {
          emailSignatario: signatario.email,
          nomeSignatario: signatario.nome,
          celularSignatario: null,
          opcaoAutenticacao: null,
          tipoAssinatura: 1,
          permitirDelegar: "N",
          apenasCelular: "N",
          exigirLogin: "N",
          exigirCodigo: "N",
          exigirDadosIdentif: "N",
          assinaturaPresencial: "N",
          nomeSignPresencial: null,
          cpfSignPresencial: null,
          ignorarRecusa: "N",
          codigoExigido: null,
          incluirImagensAutentEnvelope: "N",
          analisarFaceImagem: "N",
          percentualPrecisaoFace: 0,
          intervaloPaginaDesenho: "1,3,4-10",
        },
      },
    };

    const result = await this.astenService.api(SERVICE_NAME, data);

    return result;
  }

  public async send(envelope: object): Promise<object> {
    const SERVICE_NAME = "encaminharEnvelopeParaAssinaturas";

    const result = await this.astenService.api(SERVICE_NAME, envelope);

    return result;
  }

  public async status(envelope: object): Promise<object> {
    const SERVICE_NAME = "getDadosEnvelope";
    const STATUS_MAP = {
      1: "Em construção",
      2: "Aguardando Assinaturas",
      3: "Concluído",
      4: "Arquivado",
      5: "Cancelado",
      6: "Expirado",
    };
    const { response } = (await this.astenService.api(
      SERVICE_NAME,
      envelope
    )) as any;

    const status = STATUS_MAP[response.status as keyof typeof STATUS_MAP];

    return { status };
  }

  public async persistEnvelope(envelope: EnvelopeType): Promise<void> {
    const SERVICE_NAME = "getDadosEnvelope";
    const { response } = (await this.astenService.api(
      SERVICE_NAME,
      envelope
    )) as any;

    if (response) {
      await this.EnvelopeRepository.insert(response);
    }

    return;
  }
}
