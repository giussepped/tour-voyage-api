import { IDefault } from '../';

export interface IRequest extends IDefault {
  userId: number;
  title: string;
  description: string;
  from: Date;
  to: Date;
  cityId: number;
  isGrouped: boolean;
  budget: number;
  status: number;
}
