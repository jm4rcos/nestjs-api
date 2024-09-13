/* eslint-disable prettier/prettier */
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-users.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() loginUserDto: { email: string; password: string }) {
    return this.authService.login(loginUserDto);
  }
}
