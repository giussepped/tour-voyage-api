import { IDefault } from '../';

export interface IMessage extends IDefault {
  chatId: number;
  sender: number;
  description?: string;
  status: number;
}
