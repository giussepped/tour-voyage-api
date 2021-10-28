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
  AfterCreate,
} from 'sequelize-typescript';

import { User, Tour } from '../';
import { IBooking } from '../../interfaces';

@Table({
  timestamps: true,
  paranoid: true,
})
export class Booking extends Model<IBooking> {
  @AllowNull(false)
  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId: number;

  @AllowNull(false)
  @ForeignKey(() => Tour)
  @Column(DataType.INTEGER)
  tourId: number;

  @AllowNull(true)
  @Column(DataType.STRING(255))
  description?: string;

  @AllowNull(false)
  @Column(DataType.DATE)
  issued: string;

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

  @BelongsTo(() => User, 'userId')
  user: User;

  @BelongsTo(() => Tour, 'tourId')
  tour: Tour;

  @AfterCreate
  static onAfterCreate = async (booking: Booking, options: any) => {
    if (options?.token) {
    }
  };

  @AfterUpdate
  static onAfterUpdate = async (booking: Booking) => {
    if (booking.changed('status') && booking.user) {
    }
  };
}
