import { AuthorBook } from "../models/author-book.model";

export const authorsBooksProviders = [
  {
    provide: 'AUTHORS_BOOKS_REPOSITORY',
    useValue: AuthorBook,
  },
];