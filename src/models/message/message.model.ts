import {
  Model,
  Table,
  Column,
  DataType,
  AllowNull,
  ForeignKey,
  BelongsTo,
  BeforeValidate,
} from 'sequelize-typescript';

import { Chat } from '../';
import { IMessage } from '../../interfaces';

@Table({
  timestamps: true,
  paranoid: true,
})
export class Message extends Model<IMessage> {
  @AllowNull(false)
  @ForeignKey(() => Chat)
  @Column(DataType.INTEGER)
  chatId: number;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  sender: number;

  @AllowNull(true)
  @Column(DataType.STRING(255))
  description?: string;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  status: number;

  @BelongsTo(() => Chat, 'chatId')
  chat: Chat;

  @BeforeValidate
  static onBeforeValidate = async (message: Message) => {
    message.status = 1;
  };
}
