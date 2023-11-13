import { createPool } from "mysql2/promise";

export const poolConection = createPool({
  host: "localhost",
  port: 3306,
  database: "the_polleria",
  user: "root",
  password: "12345",
});
