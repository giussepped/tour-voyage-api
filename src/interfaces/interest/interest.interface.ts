import { IDefault } from '..';

export interface IInterest extends IDefault {
  name: string;
  description?: string;
  isActive: boolean;
}
