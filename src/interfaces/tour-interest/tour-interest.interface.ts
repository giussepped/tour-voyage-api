import { IRelationDefault } from '..';

export interface ITourInterest extends IRelationDefault {
  tourId: number;
  interestId: number;
}
