import { Controller, Get , Request, Post, UseGuards, Param, Body } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { PassportModule } from '@nestjs/passport';
import CreateUserDto from 'src/user/dto/create-user.dto';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Body() req:CreateUserDto) {
    return this.authService.login(req);
  }
  // @UseGuards(LocalAuthGuard)
  // @Post('auth/login/:username/:password')
  // async login(@Param('username') username:string, @Param('password') password:string) {
  //   // console.log("REALLY!!")
  //   return this.authService.login(username, password);
  // }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}