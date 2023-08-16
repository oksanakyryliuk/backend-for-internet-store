import { registerAs } from "@nestjs/config";

export default registerAs('db', () => ({
  host: process.env.DB_HOST,
  port: Number.parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  schema: process.env.DB_SCHEMA,
}));
