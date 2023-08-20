import { CategoryBook } from "../../database/models/category-book.model";

export const categoriesBooksProviders = [
  {
    provide: 'CATEGORIES_BOOKS_REPOSITORY',
    useValue: CategoryBook,
  },
];