import { registerAs } from "@nestjs/config";


export default registerAs('app', () => ({
  port: Number.parseInt(process.env.PORT, 10),
  nodeEnv: process.env.NODE_ENV, //development || production
  hashSalt: 10,
  jwtSecret: 'game',
  defaultPassword: 'test'
}));
