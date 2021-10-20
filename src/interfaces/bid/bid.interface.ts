import { IDefault } from '..';

export interface IBid extends IDefault {
  tourId: number;
  requestId: number;
  description?: string;
  issued?: Date;
  price: number;
  status: number;
  userScore: number;
  guideScore: number;
}
