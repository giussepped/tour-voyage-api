import { createServer } from 'http';

import { App } from './app';

const port = App.get('port');
const server = createServer(App);

server.listen(port, () => console.log(`listening on port: ${port}`));
