/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

/**
 * DTO para autenticação de usuário
 */
export class LoginDto {
  @ApiProperty({
    example: 'usuario@exemplo.com',
    description: 'O email do usuário',
  })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'senha123', description: 'A senha do usuário' })
  @IsString()
  password: string;
}
