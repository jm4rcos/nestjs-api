/* eslint-disable prettier/prettier */
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

/**
 * Função principal para inicializar a aplicação NestJS
 */
async function bootstrap() {
  // Cria uma instância da aplicação NestJS
  const app = await NestFactory.create(AppModule);

  // Aplica o ValidationPipe globalmente para validar as entradas
  app.useGlobalPipes(new ValidationPipe());

  // Configura o Swagger para documentação da API
  const config = new DocumentBuilder()
    .setTitle('Snippets API')
    .setDescription('Documentação da API de Snippets')
    .setVersion('1.0')
    .addTag('snippets')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Inicia o servidor na porta 3000
  await app.listen(3000);
}
bootstrap();
