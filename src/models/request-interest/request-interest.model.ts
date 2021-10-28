import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
  AllowNull,
} from 'sequelize-typescript';

import { Interest, Request } from '../';
import { IRequestInterest } from '../../interfaces';

@Table
export class RequestInterest extends Model<IRequestInterest> {
  @AllowNull(false)
  @ForeignKey(() => Request)
  @Column(DataType.INTEGER)
  requestId: number;

  @AllowNull(false)
  @ForeignKey(() => Interest)
  @Column(DataType.INTEGER)
  interestId: number;

  @BelongsTo(() => Request, 'requestId')
  request: Request;

  @BelongsTo(() => Interest, 'interestId')
  interest: Interest;
}
