import { Injectable, NotAcceptableException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {


    constructor(
        private jwtService: JwtService,
    ) { }

    async login(user: any) {
        console.log(user);

        const role = user.isAdmin ? "admin" : "client";
        const payload = { username: user.username, sub: user._id, role: role };
        return {
            access_token: `${this.jwtService.sign(payload)}`,
        };
    }

}
