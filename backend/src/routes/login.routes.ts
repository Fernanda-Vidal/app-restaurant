import { Router } from "express";
import CustomerController from '../controllers/customer.controller';

const router = Router();

const customerController = new CustomerController();

router.get('/:id', customerController.getCustomer);
router.post('/', customerController.login);
router.get('/', customerController.getAllCustomer);

export default router;