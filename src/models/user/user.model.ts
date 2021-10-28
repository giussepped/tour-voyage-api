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

import { Request, Interest, UserInterest } from '../';
import { IUser } from '../../interfaces';

@Table({
  timestamps: true,
  paranoid: true,
})
export class User extends Model<IUser> {
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

  @AllowNull(true)
  @Column({
    type: DataType.VIRTUAL(DataType.BOOLEAN),
  })
  get hasInterests() {
    return false; // this.interests && this.interests.length > 0;
  }

  @HasMany(() => Request, 'userId')
  requests: Request[];

  @BelongsToMany(() => Interest, () => UserInterest, 'userId', 'interestId')
  interests: Interest[];
}
