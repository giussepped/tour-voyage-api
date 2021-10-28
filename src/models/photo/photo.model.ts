import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
  AllowNull,
} from 'sequelize-typescript';

import { Tour } from '../';
import { IPhoto } from '../../interfaces';

@Table
export class Photo extends Model<IPhoto> {
  @AllowNull(false)
  @ForeignKey(() => Tour)
  @Column(DataType.INTEGER)
  tourId: number;

  @AllowNull(false)
  @Column(DataType.STRING(255))
  url: string;

  @BelongsTo(() => Tour, 'tourId')
  tour: Tour;
}
