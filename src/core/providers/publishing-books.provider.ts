import { PublishingBook } from "../models/publishing-book.model";

export const publishingBooksProviders = [
  {
    provide: 'PUBLISHING_BOOKS_REPOSITORY',
    useValue: PublishingBook,
  },
];