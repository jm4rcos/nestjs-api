/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'user@example.com',
    description: 'The email of the user',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'password123',
    description: 'The password of the user',
  })
  @MinLength(6)
  password: string;

  @ApiProperty({ example: 'John Doe', description: 'The name of the user' })
  @IsString()
  name: string;
}
