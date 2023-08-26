import { Controller, Get, Param, Delete, Post, Body, Put, BadRequestException } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OrdersService } from './orders.service';
import { UpdateOrderDto } from './dto/update-order.dto';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from 'src/database/models/order.model';
import { GetUser } from 'src/common/decorators/getUser.decorator';
import { ApiOperation } from '@nestjs/swagger';

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {


    constructor(private readonly ordersService: OrdersService) { }

    @Get('/allListOrders')
    @ApiOperation({ summary: 'Endpoint for getting all orders' })
    async getAll(): Promise<Order[]> {
        return this.ordersService.getAllOrders();
    }


    @Get(':id')
    @ApiOperation({ summary: 'Endpoint for getting one order by id' })
    getOne(@Param('id') id: number): Promise<Order> {
        return this.ordersService.getOneByIdOrder(id);
    }

    @Post('')
    @ApiOperation({ summary: 'Endpoint for creating order' })
    async create(@Body() body: CreateOrderDto, @GetUser() user): Promise<Order> {
        return this.ordersService.createOrder(body, user.username);
    }


    @Delete(':id')
    @ApiOperation({ summary: 'Endpoint for deleting one order by id' })
    async remove(@Param('id') id:number): Promise<string> {
        const order = await this.ordersService.getOneByIdOrder(id);
        if (!order) throw new BadRequestException("Id invalid");

        const resultDelete = await this.ordersService.removeOrder(id);
        return resultDelete == 1 ? "deletion successful " : "failed to delete"

    }

    @Put(':id')
    @ApiOperation({ summary: 'Endpoint for updating one order by id' })
    edit(@Body() updateDto: UpdateOrderDto, @Param('id') id: number) {
        return this.ordersService.editOrder(id, updateDto);
    }

}
