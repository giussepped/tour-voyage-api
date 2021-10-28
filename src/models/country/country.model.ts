import {
  Model,
  Table,
  Column,
  HasMany,
  DataType,
  AllowNull,
  Unique,
} from 'sequelize-typescript';

import { City } from '../';
import { ICountry } from '../../interfaces';

@Table({
  timestamps: true,
  paranoid: true,
})
export class Country extends Model<ICountry> {
  @Unique(true)
  @AllowNull(false)
  @Column(DataType.STRING(255))
  name: string;

  @HasMany(() => City, 'countryId')
  cities: City[];
}
