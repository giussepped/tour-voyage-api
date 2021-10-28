import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
  AllowNull,
  Default,
  HasMany,
  BelongsToMany,
  AfterUpdate,
} from 'sequelize-typescript';

import {
  Bid,
  City,
  Guide,
  GuideRequest,
  Interest,
  RequestInterest,
  User,
} from '../';
import { IRequest } from '../../interfaces';

@Table({
  timestamps: true,
  paranoid: true,
})
export class Request extends Model<IRequest> {
  @AllowNull(false)
  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId: number;

  @AllowNull(false)
  @Column(DataType.STRING(255))
  title: string;

  @AllowNull(false)
  @Column(DataType.STRING(255))
  description: string;

  @AllowNull(false)
  @Column(DataType.DATE)
  from: string;

  @AllowNull(false)
  @Column(DataType.DATE)
  to: string;

  @AllowNull(false)
  @ForeignKey(() => City)
  @Column(DataType.INTEGER)
  cityId: number;

  @Default(false)
  @AllowNull(false)
  @Column(DataType.BOOLEAN)
  isGrouped: boolean;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  budget: number;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  status: number;

  @BelongsTo(() => User, 'userId')
  user: User;

  @BelongsTo(() => City, 'cityId')
  city: City;

  @HasMany(() => Bid, 'requestId')
  bids: Bid[];

  @BelongsToMany(() => Guide, () => GuideRequest, 'requestId', 'guideId')
  guides: Guide[];

  @BelongsToMany(
    () => Interest,
    () => RequestInterest,
    'requestId',
    'interestId',
  )
  interest: Interest[];

  @AfterUpdate
  static onAfterUpdate = async (request: Request) => {
    if (request.changed('status') && request.user) {
    }
  };
}
