import { Sequelize } from 'sequelize-typescript';

import * as environments from './config/database.config';
import { Country, City } from './models';

const current: string = process.env.NODE_ENV || 'development';
const config = (environments as any)[current];

const sequelize = new Sequelize({
  ...config,
  models: [__dirname + '/src/models/**/*.model.ts'],
  modelMatch: (filename, member) => {
    console.log(filename);
    return (
      filename.substring(0, filename.indexOf('.model')) === member.toLowerCase()
    );
  },
});

sequelize.addModels([Country, City]);

export default sequelize;
