import { Publishing } from "../models/publishing.model";

export const publishingsProviders = [
  {
    provide: 'PUBLISHINGS_REPOSITORY',
    useValue: Publishing,
  },
];