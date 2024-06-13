import "reflect-metadata";
import { DataSource } from "typeorm";
import { EnvelopeTable1718317503597 } from "./migrations/1718317503597-EnvelopeTable";
import { Envelope } from "./entities/Envelope";

export const MysqlDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "password",
  database: process.env.DB_NAME || "db",
  synchronize: true,
  logging: false,
  entities: [Envelope],
  migrations: [EnvelopeTable1718317503597],
  subscribers: [],
});

MysqlDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
