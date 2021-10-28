import {
  Model,
  Table,
  Column,
  DataType,
  AllowNull,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import { Interest, User } from '../';
import { IUserInterest } from '../../interfaces';

@Table
export class UserInterest extends Model<IUserInterest> {
  @AllowNull(false)
  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId: number;

  @AllowNull(false)
  @ForeignKey(() => Interest)
  @Column(DataType.INTEGER)
  interestId: number;

  @BelongsTo(() => User, 'userId')
  user: User;

  @BelongsTo(() => Interest, 'interestId')
  interest: Interest;
}
