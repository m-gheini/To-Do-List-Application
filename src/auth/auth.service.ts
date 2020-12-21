import { Injectable } from '@nestjs/common';
import { UserServices } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Injectable()
export class AuthService {
  constructor(
    private userServices: UserServices,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userServices.getUser(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  // async login(name:string, password:string) {
  //   // console.log("HEREE");
  //   const user = await this.userServices.getUser(name);
  //   const payload = { username: name, sub: user.id };
  //   return {
  //     access_token: this.jwtService.sign(payload),
  //   };
  // }
}