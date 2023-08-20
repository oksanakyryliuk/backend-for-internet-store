import { Controller, Body, Post, BadRequestException, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { Public } from 'src/common/decorators/public.decorator';
import { ApiTags } from '@nestjs/swagger';
import { LoginUserDto } from '../users/dto/login-user.dro';
import {ApiOperation} from '@nestjs/swagger'

@ApiTags('Auth API')
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UsersService,
  ) { }


  @Public()
  @Post('/signup')
  @ApiOperation({ summary: 'Endpoint for registration user' })
  async register(@Body() createUserDto: CreateUserDto) {
    const check = await this.userService.getByUserName(createUserDto.username);
    if (check) return 'user exist'
    else {
      // validate input data
      const user = await this.userService.createUser(createUserDto);
      return { message: 'User created successfully', user };
    }
  }

  @Public()
  @Post("/login")
  @ApiOperation({ summary: 'Endpoint for login user' })
  async login(@Body() loginDto: LoginUserDto) {
    const user = await this.userService.getByUserName(loginDto.username);
    if (!user) {
      throw new BadRequestException('invalid credentials')
    }
    if (!await bcrypt.compare(loginDto.password, user.password)) {
      throw new BadRequestException('invalid credentials')
    }

    return this.authService.login({
      username: loginDto.username,
      isAdmin: user.isAdmin,
      id: user.id,
    });
  }


  @Get('test')
  test() {
    return 'Guard works'
  }

}
