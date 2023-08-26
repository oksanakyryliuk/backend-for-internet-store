import { Injectable, Inject } from '@nestjs/common';
import { OrderBook } from 'src/database/models/order-book.model';

@Injectable()
export class OrderBooksService {
    constructor(
        @Inject('ORDERS_BOOKS_REPOSITORY')
        private  orderBookRepo: typeof OrderBook ,
        
        ){}
    
        addOrderBook(bookId: number, orderId: number): Promise<OrderBook> {
            return this.orderBookRepo.create({
              bookId,
              orderId
            })
          }   
}
