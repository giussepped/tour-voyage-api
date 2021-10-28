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
} from 'sequelize-typescript';

import { Bid, City, Guide, Interest, TourInterest, Photo } from '../';
import { ITour } from '../../interfaces';

@Table({
  timestamps: true,
  paranoid: true,
})
export class Tour extends Model<ITour> {
  @AllowNull(false)
  @ForeignKey(() => Guide)
  @Column(DataType.INTEGER)
  guideId: number;

  @AllowNull(false)
  @Column(DataType.STRING(255))
  title: string;

  @AllowNull(true)
  @Column(DataType.STRING(255))
  description?: string;

  @AllowNull(true)
  @Column({
    type: DataType.VIRTUAL(DataType.STRING),
  })
  get photo() {
    return;
  }

  @AllowNull(false)
  @ForeignKey(() => City)
  @Column(DataType.INTEGER)
  cityId: number;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  price: number;

  @Default(false)
  @AllowNull(false)
  @Column(DataType.BOOLEAN)
  isGrouped: boolean;

  @Default(false)
  @AllowNull(false)
  @Column(DataType.BOOLEAN)
  isPublic: boolean;

  @BelongsTo(() => Guide, 'guideId')
  guide: Guide;

  @BelongsTo(() => City, 'cityId')
  city: City;

  @HasMany(() => Bid, 'tourId')
  bids: Bid[];

  @HasMany(() => Photo, 'tourId')
  photos: Photo[];

  @BelongsToMany(() => Interest, () => TourInterest, 'tourId', 'interestId')
  interests: Interest[];
}
