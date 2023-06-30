import { DataSource } from "typeorm";

const myDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "user",
  password: "user",
  database: "multi-authentication-api",
  synchronize: true,
  logging: ["error"],
  entities: ["src/models/entities/*.ts"],
  dropSchema: true,
});

export default myDataSource;
