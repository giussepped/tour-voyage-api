import { IRelationDefault } from '../';

export interface IUserInterest extends IRelationDefault {
  userId: number;
  interestId: number;
}
