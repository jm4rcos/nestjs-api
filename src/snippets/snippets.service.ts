/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSnippetDto } from './dto/create-snippet.dto';

@Injectable()
export class SnippetsService {
  constructor(private prisma: PrismaService) {}

  async create(createSnippetDto: CreateSnippetDto, userId: number) {
    return this.prisma.snippet.create({
      data: {
        ...createSnippetDto,
        authorId: userId,
      },
    });
  }

  async findAll() {
    return this.prisma.snippet.findMany({
      include: { author: { select: { username: true } } },
    });
  }

  async findOne(id: number) {
    const snippet = await this.prisma.snippet.findUnique({
      where: { id },
      include: { author: { select: { username: true } } },
    });

    if (!snippet) {
      throw new NotFoundException(`Snippet with ID ${id} not found`);
    }

    return snippet;
  }

  async update(id: number, updateSnippetDto: CreateSnippetDto) {
    return this.prisma.snippet.update({
      where: { id },
      data: updateSnippetDto,
    });
  }

  async remove(id: number) {
    return this.prisma.snippet.delete({
      where: { id },
    });
  }
}
