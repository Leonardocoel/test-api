import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class EnvelopeTable1718317503597 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "envelopes",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
          },
          {
            name: "descricao",
            type: "enum",
            enum: ["S", "N"],
          },
          {
            name: "conteudo",
            type: "varchar",
          },
          {
            name: "incluirHashTodasPaginas",
            type: "enum",
            enum: ["S", "N"],
          },
          {
            name: "permitirDespachos",
            type: "enum",
            enum: ["S", "N"],
          },
          {
            name: "usarOrdem",
            type: "enum",
            enum: ["S", "N"],
          },
          {
            name: "hashSHA256",
            type: "varchar",
          },
          {
            name: "hashSHA512",
            type: "varchar",
          },
          {
            name: "mensagem",
            type: "varchar",
          },
          {
            name: "mensagemObservadores",
            type: "varchar",
          },
          {
            name: "motivoCancelamento",
            type: "varchar",
          },
          {
            name: "numeroPaginas",
            type: "varchar",
          },
          {
            name: "status",
            type: "enum",
            enum: ["1", "2", "3", "4", "5", "6"],
          },
          {
            name: "dataHoraCriacao",
            type: "timestamp",
          },
          {
            name: "dataHoraAlteracao",
            type: "timestamp",
          },
          {
            name: "objetoContrato",
            type: "varchar",
          },
          {
            name: "statusContrato",
            type: "varchar",
          },
          {
            name: "numContrato",
            type: "varchar",
          },
          {
            name: "descricaoContratante",
            type: "varchar",
          },
          {
            name: "descricaoContratado",
            type: "varchar",
          },
          {
            name: "bloquearDesenhoPaginas",
            type: "enum",
            enum: ["S", "N"],
          },
          {
            name: "Envelope",
            type: "varchar",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("envelopes");
  }
}
