import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
  AllowNull,
} from 'sequelize-typescript';

import { Guide, City } from '../';
import { IGuideCity } from '../../interfaces';

@Table
export class GuideCity extends Model<IGuideCity> {
  @AllowNull(false)
  @ForeignKey(() => Guide)
  @Column(DataType.INTEGER)
  guideId: number;

  @AllowNull(false)
  @ForeignKey(() => City)
  @Column(DataType.INTEGER)
  cityId: number;

  @BelongsTo(() => Guide, 'guideId')
  guide: Guide;

  @BelongsTo(() => City, 'cityId')
  city: City;
}
