import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { AuthenticationService } from './authentication.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { LoginUserDto } from '../dto/login-user.dto';
import { ChangeUserPasswordDto } from '../dto/change-user-password.dto';

@Controller('auth')
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {}

  @Post('register')
  public async create(@Body() dto: CreateUserDto) {
    const newUser = await this.authService.register(dto);
    return newUser.toPOJO();
  }

  @Post('login')
  public async login(@Body() dto: LoginUserDto) {
    const verifiedUser = await this.authService.verifyUser(dto);
    return verifiedUser.toPOJO();
  }

  @Get(':id')
  public async show(@Param('id') id: string) {
    const existUser = await this.authService.getUser(id);
    return existUser.toPOJO();
  }

  @Post('/:id/change-password')
  public async changePassword(@Param('id') id: string, @Body() dto: ChangeUserPasswordDto) {
    const user = await this.authService.changePassword(id, dto);
    return user.toPOJO();
  }
}
