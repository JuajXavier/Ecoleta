import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index); // index = list

routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index); // show = lista 1 unico
routes.get('/points/:id', pointsController.show); // show = lista 1 unico


export default routes;