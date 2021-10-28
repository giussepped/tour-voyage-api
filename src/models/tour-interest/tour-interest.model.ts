import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
  AllowNull,
} from 'sequelize-typescript';

import { Interest, Tour } from '../';
import { ITourInterest } from '../../interfaces';

@Table
export class TourInterest extends Model<ITourInterest> {
  @AllowNull(false)
  @ForeignKey(() => Tour)
  @Column(DataType.INTEGER)
  tourId: number;

  @AllowNull(false)
  @ForeignKey(() => Interest)
  @Column(DataType.INTEGER)
  interestId: number;

  @BelongsTo(() => Tour, 'tourId')
  tour: Tour;

  @BelongsTo(() => Interest, 'interestId')
  interest: Interest;
}
