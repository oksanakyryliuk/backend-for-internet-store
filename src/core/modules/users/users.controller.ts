import { Controller, Put, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';
import { UpdateUserDto } from './dto/update-user.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {

    
    constructor(private readonly usersService: UsersService){
    }

    @Put(':id')
    edit(@Body() updateUserDto: UpdateUserDto, @Param('id') id: any) {
        //console.log(updateUserDto.price);
        return this.usersService.edit(id, updateUserDto);
    }

}
