import { IDefault } from '..';

export interface IBooking extends IDefault {
  userId: number;
  tourId: number;
  description?: string;
  issued: Date;
  status: number;
  userScore: number;
  guideScore: number;
}
