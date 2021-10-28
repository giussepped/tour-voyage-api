import { IDefault } from '../';

export interface IUser extends IDefault {
  firstName: string;
  lastName: string;
  bio?: string;
  email: string;
  password: string;
  photo?: string;
  status: number;
  token?: string;
  hasInterests?: boolean;
}
