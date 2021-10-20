import { IDefault } from '..';

export interface ITour extends IDefault {
  guideId: number;
  title: string;
  description?: string;
  photo?: string;
  cityId: number;
  price: number;
  isGrouped: boolean;
  isPublic: boolean;
}
