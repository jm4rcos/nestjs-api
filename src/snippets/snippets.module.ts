/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SnippetsController } from './snippets.controller';
import { SnippetsService } from './snippets.service';

@Module({
  controllers: [SnippetsController],
  providers: [SnippetsService, PrismaService],
})
export class SnippetsModule {}
