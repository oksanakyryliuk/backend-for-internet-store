import { Injectable, NotFoundException, Inject, BadRequestException } from '@nestjs/common';
import { Order } from 'src/database/models/order.model';
import { UpdateOrderDto } from './dto/update-order.dto';
import { CreateOrderDto } from './dto/create-order.dto';
import { UsersService } from '../users/users.service';
import { OrderBooksService } from '../order-books/order-books.service';

@Injectable()
export class OrdersService {
    
    constructor(
        @Inject('ORDERS_REPOSITORY')
        private  ordersModule: typeof Order,       
        private readonly usersService: UsersService,
        private readonly orderbookService: OrderBooksService
        ){}

    async createOrder(payload: CreateOrderDto, username:string): Promise<Order> {
      const userId = (await this.usersService.findOne({ where: { username: username } })).id;
      if(payload.books.length===0){
     throw new BadRequestException('Order cannot be without books')}
     
       const order={...payload, userId};
       const createdOrder=await this.ordersModule.create(order);
    
          ///add into table order-books table      
       payload.books.forEach(book => {
        this.orderbookService.addOrderBook(book.id, createdOrder.id, book.count)
      });

        return createdOrder;
    }



    async getAllOrders(): Promise<Order[]> {
        return this.ordersModule.findAll();
    }

    async getOneByIdOrder(id: number): Promise<Order> {
        return this.ordersModule.findByPk(id)
    }


    async removeOrder(id: number) {
        return await this.ordersModule.destroy({
            where: { id: id }
        });
    }

    async editOrder(id: number, updateData: UpdateOrderDto): Promise<Order> {
        const existingOrder = await this.ordersModule.findByPk(id);

        if (!existingOrder) {
            throw new NotFoundException(`Order with ID ${id} not found`);
        }
        await existingOrder.update(updateData);
        return existingOrder.save();
    }


}
