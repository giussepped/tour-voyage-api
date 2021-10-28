import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
  AllowNull,
  AfterBulkCreate,
} from 'sequelize-typescript';

import { Guide, Request } from '../';
import { IGuideRequest } from '../../interfaces';

@Table
export class GuideRequest extends Model<IGuideRequest> {
  @AllowNull(false)
  @ForeignKey(() => Guide)
  @Column(DataType.INTEGER)
  guideId: number;

  @AllowNull(false)
  @ForeignKey(() => Request)
  @Column(DataType.INTEGER)
  requestId: number;

  @BelongsTo(() => Guide, 'guideId')
  guide: Guide;

  @BelongsTo(() => Request, 'requestId')
  request: Request;

  @AfterBulkCreate
  static onAfterBulkCreate = async (requests: GuideRequest, options: any) => {
    if (options?.tokens) {
    }
  };
}
