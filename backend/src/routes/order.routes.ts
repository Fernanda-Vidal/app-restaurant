import { Router } from "express";
import OrderController from "../controllers/order.controller";

const router = Router();

const orderController = new OrderController();

router.put('/:id/update', orderController.updateStatus);
router.get('/:id', orderController.getById);
router.get('/', orderController.getAll);
router.post('/', orderController.createOrder);

export default router;