import express, { Request, Response, NextFunction } from 'express';
import { Errors } from './core/constant/errors';
import morgan from 'morgan';
import cors from "cors";
import { handleErrors } from './api/middlewares/errorHandler';
import baseRouter from './api/routes/base';
import {serve,setup} from "swagger-ui-express"
import swaggerSpec from './core/utilities/docs.setup';

const app = express();

app.use(express.json());
app.use(cors({origin: "*"}))
app.use(express.urlencoded({ extended: false }));
app.use(morgan('date[web] :method :url :status :response-time ms - :res[content-length]'));

app.use('/docs', serve, setup(swaggerSpec))
app.use('/', baseRouter);

app.use((req, res, _next): void => {
  res.status(404).send({
    status: false,
    error: 'not found',
    message: Errors.RESOURCE_NOT_FOUND,
    data: {},
    path: req.url
  });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err) {
    handleErrors(err, req, res, next);
  } else {
    next();
  }
});

export default app;
