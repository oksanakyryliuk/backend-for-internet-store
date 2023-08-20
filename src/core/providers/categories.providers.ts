import { Category } from "../../database/models/category.model";

export const categoriesProviders = [
  {
    provide: 'CATEGORIES_REPOSITORY',
    useValue: Category,
  },
];