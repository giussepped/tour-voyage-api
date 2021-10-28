import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
  AllowNull,
  BelongsToMany,
} from 'sequelize-typescript';

import { Country, Guide, GuideCity } from '../';
import { ICity } from '../../interfaces';

@Table({
  timestamps: true,
  paranoid: true,
})
export class City extends Model<ICity> {
  @AllowNull(false)
  @Column(DataType.STRING(255))
  name: string;

  @AllowNull(true)
  @Column(DataType.STRING(255))
  photo?: string;

  @AllowNull(false)
  @ForeignKey(() => Country)
  @Column(DataType.INTEGER)
  countryId: number;

  @AllowNull(false)
  @Column(DataType.GEOMETRY('POINT'))
  location: string;

  @AllowNull(false)
  @Column(DataType.STRING(255))
  latitude: string;

  @AllowNull(false)
  @Column(DataType.STRING(255))
  longitude: string;

  @BelongsTo(() => Country, 'countryId')
  country: Country;

  @BelongsToMany(() => Guide, () => GuideCity, 'cityId', 'guideId')
  guide: Guide[];
}
