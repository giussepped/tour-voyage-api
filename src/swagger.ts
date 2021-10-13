import swagger from 'swagger-jsdoc';

import { port } from './config';

export default swagger({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Tour Voyage API',
      description: '',
      version: '1.0.0',
    },
    servers: [
      {
        url: `http://localhost:${port}/api`,
      },
    ],
  },
  apis: ['./src/routes/*.ts'],
});
