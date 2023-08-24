import { Language } from "src/database/models/language.model";

export const languagesProviders = [
  {
    provide: 'LANGUAGES_REPOSITORY',
    useValue: Language,
  },
];