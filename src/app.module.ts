/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { SnippetsModule } from './snippets/snippets.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, UsersModule, SnippetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
