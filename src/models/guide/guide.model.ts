import {
  Model,
  Table,
  Column,
  DataType,
  AllowNull,
  Unique,
  IsEmail,
  HasMany,
  BelongsToMany,
} from 'sequelize-typescript';

import { Tour, City, GuideCity } from '../';
import { IGuide } from '../../interfaces';

@Table({
  timestamps: true,
  paranoid: true,
})
export class Guide extends Model<IGuide> {
  @AllowNull(false)
  @Column(DataType.STRING(255))
  firstName: string;

  @AllowNull(false)
  @Column(DataType.STRING(255))
  lastName: string;

  @AllowNull(true)
  @Column(DataType.STRING(255))
  bio?: string;

  @IsEmail
  @Unique(true)
  @AllowNull(false)
  @Column(DataType.STRING(255))
  email: string;

  @AllowNull(false)
  @Column(DataType.STRING(255))
  password: string;

  @AllowNull(true)
  @Column(DataType.STRING(255))
  photo?: string;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  status: number;

  @AllowNull(true)
  @Column(DataType.STRING(255))
  token?: string;

  @HasMany(() => Tour, 'guideId')
  tours: Tour[];

  @BelongsToMany(() => City, () => GuideCity, 'guideId', 'cityId')
  cities: City[];
}
