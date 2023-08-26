import { Controller, Put, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {

    
    constructor(private readonly usersService: UsersService){
    }

    @Put(':id')
    @ApiOperation({ summary: 'Endpoint for updating user' })
    edit(@Body() updateUserDto: UpdateUserDto, @Param('id') id: any) {
        //console.log(updateUserDto.price);
        return this.usersService.edit(id, updateUserDto);
    }

}
