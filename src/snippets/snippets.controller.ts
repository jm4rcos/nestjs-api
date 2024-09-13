/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateSnippetDto } from './dto/create-snippet.dto';
import { SnippetsService } from './snippets.service';

@Controller('snippets')
@UseGuards(JwtAuthGuard)
export class SnippetsController {
  constructor(private readonly snippetsService: SnippetsService) {}

  @Post()
  create(@Request() req, @Body() createSnippetDto: CreateSnippetDto) {
    return this.snippetsService.create(createSnippetDto, req.user.userId);
  }

  @Get()
  findAll() {
    return this.snippetsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.snippetsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateSnippetDto: CreateSnippetDto) {
    return this.snippetsService.update(+id, updateSnippetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.snippetsService.remove(+id);
  }
}
