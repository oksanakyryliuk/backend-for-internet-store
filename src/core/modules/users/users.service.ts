import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { User } from 'src/database/models/user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(
        @Inject('USERS_REPOSITORY')
        private usersModule: typeof User

    ) { }

    async getAll(): Promise<User[]> {
        return this.usersModule.findAll();
    }

    async findOne(condition: any): Promise<User> {
        return this.usersModule.findOne(condition);
    }

    async getByIdUser(id: string): Promise<User> {
        return this.usersModule.findByPk(id)
    }

    async getByUserName(username: string): Promise<User> {
        //  return await this.usersModule.findOne({username: username})
        return this.usersModule.findOne({
            where: { username }
        })
    }


    async createUser(userDto: CreateUserDto): Promise<User> {
        const newUser = new this.usersModule(userDto);
        newUser.password = await bcrypt.hash(userDto.password, 10);
        return newUser.save();
    }

    async remove(id: string) {
        return await this.usersModule.destroy({
            where: {
                id: id
            }
        });
    }

    // async edit(id: any, userDto: UpdateUserDto) {
    //     const user = await this.usersModule.findByPk(id);
    //     user.firstName = userDto.firstName;
    //     user.lastName = userDto.lastName;
    //     return await user.save();
    // }

    async edit(id: number, updateData: UpdateUserDto): Promise<User> {
        const existingUser = await this.usersModule.findByPk(id);
        delete updateData.email;

        if (!existingUser) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }
        await existingUser.update(updateData);
        return existingUser.save();
    }

}
