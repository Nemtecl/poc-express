// eslint-disable-next-line import/order
import routes from './routes';
import express, { Application } from 'express';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import cors = require('cors');
import helmet = require('helmet');

const { PORT } = process.env;

const port = PORT || 5000;

createConnection()
  .then(() => {
    // Boot express
    const app: Application = express();

    app.use(cors());
    app.use(express.json());
    app.use(helmet());

    // Application routing
    routes(app);
    app.listen(port, () => console.log(`Server is listening on port ${port}!`));
  })
  .catch((error) => console.log(error));
