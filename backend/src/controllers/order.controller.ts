import { Request, Response } from 'express';
import OrderService from '../services/order.service';


export default class OrderController {
    private service: OrderService;

    constructor() {
        this.service = new OrderService();
    }

    public createOrder = async (req: Request, res: Response) => {
        const { customer_id, dishes } = req.body;
        const order = await this.service.createOrder(Number(customer_id), dishes);
        return res.status(201).json(order);
    }

    public getAll = async (req: Request, res: Response) => {
        const orders = await this.service.getAll();
        return res.status(200).json(orders);
    }

    public getById = async (req: Request, res: Response) => {
        const { id } = req.params;
        const order = await this.service.getById(Number(id));
        return res.status(200).json(order);
    }

    public getByCustomer = async (req: Request, res: Response) => {
        const { id } = req.params;
        const orders = await this.service.getByCustomer(Number(id));
        return res.status(200).json(orders);
    }

    public updateStatus = async (req: Request, res: Response) => {
        const { id } = req.params;
        const { q } = req.query;
        const updated = await this.service.updateStatus(Number(id), q as string);
        return res.status(200).json({ message: 'Order status updated' });
    }
}