import { IRelationDefault } from '..';

export interface IPhoto extends IRelationDefault {
  tourId: number;
  url: string;
}
