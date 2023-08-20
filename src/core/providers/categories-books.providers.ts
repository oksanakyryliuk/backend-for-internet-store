import { CategoryBook } from "../models/category-book.model";

export const categoriesBooksProviders = [
  {
    provide: 'CATEGORIES_BOOKS_REPOSITORY',
    useValue: CategoryBook,
  },
];