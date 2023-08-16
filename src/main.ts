import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  const swaggerConfig = new DocumentBuilder()
  .setTitle('Game swagger: ')
  // .setDescription('The cats API description')
  .setVersion('1.0')
  .addBearerAuth()
  .build();
const document = SwaggerModule.createDocument(app, swaggerConfig);
SwaggerModule.setup('swagger', app, document);

await app.listen(process.env.PORT);
console.log(`Server is running on port  ${process.env.PORT}`);

}
bootstrap();
