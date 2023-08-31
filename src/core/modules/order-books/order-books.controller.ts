import { Controller, Post, Param, Query } from '@nestjs/common';
import { OrderBooksService } from './order-books.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('OrderBooks')
@Controller('order-books')
export class OrderBooksController {
    constructor(private readonly orderBooksService: OrderBooksService) {}
   
    @Post('/:bookId/:orderId')
    @ApiOperation({ summary: 'Endpoint for combinating of order and book' })
    async addOrderBook(@Param('bookId') bookId: number, @Param('orderId') orderId: number, @Query('count') count: number) {
      return this.orderBooksService.addOrderBook(bookId, orderId, count)
    }

}
