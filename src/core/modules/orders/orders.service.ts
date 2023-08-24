import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { Order } from 'src/database/models/order.model';
import { UpdateOrderDto } from './dto/update-order.dto';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
    
    constructor(
        @Inject('ORDERS_REPOSITORY')
        private  ordersModule: typeof Order       
        ){}

    async createOrder(payload: CreateOrderDto): Promise<Order> {
        return this.ordersModule.create(payload);
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
