import { IDefault } from '../';

export interface ICity extends IDefault {
  name: string;
  photo?: string;
  countryId: number;
  location: unknown;
  latitude: string;
  longitude: string;
  isActive: boolean;
}
