import { PublishingBook } from "../../database/models/publishing-book.model";

export const publishingBooksProviders = [
  {
    provide: 'PUBLISHING_BOOKS_REPOSITORY',
    useValue: PublishingBook,
  },
];