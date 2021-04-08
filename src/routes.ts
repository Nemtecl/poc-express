import { Application, Router } from 'express';
import { PingController, IndexController } from './controllers';

const ctrls: [string, Router][] = [
  ['/', IndexController],
  ['/ping', PingController],
];

const routes = (app: Application) => {
  ctrls.forEach((c) => {
    const [url, controller] = c;
    app.use(url, controller);
  });
};

export default routes;
