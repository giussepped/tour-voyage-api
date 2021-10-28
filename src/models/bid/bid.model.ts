import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
  Length,
  AllowNull,
  AfterUpdate,
} from 'sequelize-typescript';

import { Request, Tour } from '../';
import { IBid } from '../../interfaces';

@Table({
  timestamps: true,
  paranoid: true,
})
export class Bid extends Model<IBid> {
  @AllowNull(false)
  @ForeignKey(() => Tour)
  @Column(DataType.INTEGER)
  tourId: number;

  @AllowNull(false)
  @ForeignKey(() => Request)
  @Column(DataType.INTEGER)
  requestId: number;

  @AllowNull(true)
  @Column(DataType.STRING(255))
  description?: string;

  @AllowNull(true)
  @Column(DataType.DATE)
  issued?: string;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  price: number;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  status: number;

  @Length({ min: 0, max: 10 })
  @AllowNull(false)
  @Column(DataType.DOUBLE)
  userScore: number;

  @Length({ min: 0, max: 10 })
  @AllowNull(false)
  @Column(DataType.DOUBLE)
  guideScore: number;

  @BelongsTo(() => Tour, 'tourId')
  tour: Tour;

  @BelongsTo(() => Request, 'requestId')
  request: Request;

  @AfterUpdate
  static onAfterUpdate = async (bid: Bid) => {
    if (bid.changed('status')) {
    }
  };
}
