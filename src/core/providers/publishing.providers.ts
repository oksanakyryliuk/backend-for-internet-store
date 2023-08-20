import { Publishing } from "../../database/models/publishing.model";

export const publishingsProviders = [
  {
    provide: 'PUBLISHINGS_REPOSITORY',
    useValue: Publishing,
  },
];