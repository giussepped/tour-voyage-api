import { IDefault } from '../';

export interface IChat extends IDefault {
  userId: number;
  guideId: number;
  status: number;
}
