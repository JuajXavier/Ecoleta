import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/tmp', express.static(path.resolve(__dirname, '..', 'tmp')));
app.listen(3333);