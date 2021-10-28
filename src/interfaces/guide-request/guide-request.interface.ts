import { IRelationDefault } from '..';

export interface IGuideRequest extends IRelationDefault {
  guideId: number;
  requestId: number;
}
