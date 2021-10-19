import express from 'express';
import morgan from 'morgan';

import swagger from 'swagger-ui-express';

import router from './routes';
import specs from './swagger';
import { port } from './config';

import './database';

const App = express();

App.set('port', port);

App.use(morgan('tiny'));
App.use(express.json());
App.use('/docs', swagger.serve, swagger.setup(specs));

App.use('/api', router);

export { App };
