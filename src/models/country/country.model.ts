import { Model, Table, Column, HasMany, DataType } from 'sequelize-typescript';

import { City } from '../';
import { ICountry } from '../../interfaces';

@Table({
  timestamps: true,
  paranoid: true,
})
export class Country extends Model<ICountry> {
  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    unique: true,
  })
  name: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  isActive: boolean;

  @HasMany(() => City, 'countryId')
  cities: City[];
}
