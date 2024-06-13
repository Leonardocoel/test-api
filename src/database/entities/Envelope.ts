import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "envelopes" })
export class Envelope {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "descricao", type: "enum", enum: ["S", "N"] })
  descricao!: string;

  @Column({ name: "conteudo", type: "varchar" })
  conteudo!: string;

  @Column({ name: "incluirHashTodasPaginas", type: "enum", enum: ["S", "N"] })
  incluirHashTodasPaginas!: string;
  @Column({ name: "permitirDespachos", type: "enum", enum: ["S", "N"] })
  permitirDespachos!: string;

  @Column({ name: "usarOrdem", type: "enum", enum: ["S", "N"] })
  usarOrdem!: string;

  @Column({ name: "hashSHA256", type: "varchar" })
  hashSHA256!: string;

  @Column({ name: "hashSHA512", type: "varchar" })
  hashSHA512!: string;

  @Column({ name: "mensagem", type: "varchar" })
  mensagem!: string;

  @Column({ name: "mensagemObservadores", type: "varchar" })
  mensagemObservadores!: string;

  @Column({ name: "motivoCancelamento", type: "varchar" })
  motivoCancelamento!: string;

  @Column({ name: "numeroPaginas", type: "varchar" })
  numeroPaginas!: string;

  @Column({
    name: "status",
    type: "enum",
    enum: ["1", "2", "3", "4", "5", "6"],
  })
  status!: string;

  @Column({ name: "dataHoraCriacao", type: "timestamp" })
  dataHoraCriacao!: Date;

  @Column({ name: "dataHoraAlteracao", type: "timestamp" })
  dataHoraAlteracao!: Date;

  @Column({ name: "objetoContrato", type: "varchar" })
  objetoContrato!: string;

  @Column({ name: "statusContrato", type: "varchar" })
  statusContrato!: string;

  @Column({ name: "numContrato", type: "varchar" })
  numContrato!: string;

  @Column({ name: "descricaoContratante", type: "varchar" })
  descricaoContratante!: string;

  @Column({ name: "descricaoContratado", type: "varchar" })
  descricaoContratado!: string;

  @Column({ name: "bloquearDesenhoPaginas", type: "enum", enum: ["S", "N"] })
  bloquearDesenhoPaginas!: string;

  @Column({ name: "Envelope", type: "varchar" })
  envelope!: string;
}
