import { Controller, Get, Param, Delete, Post, Body, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OrdersService } from './orders.service';
import { UpdateOrderDto } from './dto/update-order.dto';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from 'src/database/models/order.model';

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {


    constructor(private readonly ordersService: OrdersService) {}

    @Get('/allListOrders')
    async getAll(): Promise<Order[]>{
        return this.ordersService.getAllOrders();
      }

 
     @Get(':id') 
     getOne(@Param('id') id:number): Promise<Order>{
          return this.ordersService.getOneByIdOrder(id);
      }

    @Post('')
    async create(@Body() body: CreateOrderDto): Promise<Order> {
        return this.ordersService.createOrder(body);
      }
     
      
    @Delete(':id')
    remove(@Param('id') id): string{
        this.ordersService.removeOrder(id);
    return `Delete order by ${id}`
    }

    @Put(':id')
    edit(@Body() updateDto: UpdateOrderDto, @Param('id') id: number){
        return this.ordersService.editOrder(id, updateDto);
    }

}
