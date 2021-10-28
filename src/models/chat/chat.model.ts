import {
  Model,
  Table,
  Column,
  DataType,
  AllowNull,
  ForeignKey,
  BelongsTo,
  HasMany,
  BeforeCreate,
} from 'sequelize-typescript';

import { User, Guide, Message } from '../';
import { IChat } from '../../interfaces';

@Table({
  timestamps: true,
  paranoid: true,
})
export class Chat extends Model<IChat> {
  @AllowNull(false)
  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId: number;

  @AllowNull(false)
  @ForeignKey(() => Guide)
  @Column(DataType.INTEGER)
  guideId: number;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  status: number;

  @BelongsTo(() => User, 'userId')
  user: User;

  @BelongsTo(() => Guide, 'guideId')
  guide: Guide;

  @HasMany(() => Message, 'chatId')
  messages: Message[];

  @BeforeCreate
  static onBeforeCreate = async ({ userId, guideId }: Chat) => {
    // not implemented
  };
}
