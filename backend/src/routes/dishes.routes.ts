import { Router } from "express";
import DishesController from "../controllers/dishes.controller";

const router = Router();

const dishesController = new DishesController();

router.get('/search', dishesController.getByQuery);
router.delete('/:id', dishesController.inactiveDish);
router.put('/:id', dishesController.updateDish);
router.post('/', dishesController.createDish);
router.get('/', dishesController.getAllDishes);

export default router;