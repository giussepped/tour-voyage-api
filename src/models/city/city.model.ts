import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import { Country } from '../';
import { ICity } from '../../interfaces';

@Table({
  timestamps: true,
  paranoid: true,
})
export class City extends Model<ICity> {
  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: true,
  })
  photo: string;

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  @ForeignKey(() => Country)
  countryId: number;

  @Column({
    type: DataType.GEOMETRY('POINT'),
    allowNull: false,
  })
  location: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  latitude: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  longitude: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  isActive: boolean;

  @BelongsTo(() => Country, 'countryId')
  country: Country;
}
