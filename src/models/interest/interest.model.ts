import {
  Model,
  Table,
  Column,
  DataType,
  AllowNull,
  Unique,
  BelongsToMany,
} from 'sequelize-typescript';

import { Tour, User, UserInterest, Request, RequestInterest } from '../';
import { IInterest } from '../../interfaces';
import { TourInterest } from '../tour-interest/tour-interest.model';

@Table({
  timestamps: true,
  paranoid: true,
})
export class Interest extends Model<IInterest> {
  @Unique(true)
  @AllowNull(false)
  @Column(DataType.STRING(255))
  name: string;

  @AllowNull(true)
  @Column(DataType.STRING(255))
  description?: string;

  @BelongsToMany(() => User, () => UserInterest, 'interestId', 'userId')
  users: User[];

  @BelongsToMany(() => Tour, () => TourInterest, 'interestId', 'tourId')
  tours: Tour[];

  @BelongsToMany(
    () => Request,
    () => RequestInterest,
    'interestId',
    'requestId',
  )
  requests: Request[];
}
