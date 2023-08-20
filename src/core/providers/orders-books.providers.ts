import { OrderBook } from "../models/order-book.model";

export const ordersBooksProviders = [
  {
    provide: 'ORDERS_BOOKS_REPOSITORY',
    useValue: OrderBook,
  },
];