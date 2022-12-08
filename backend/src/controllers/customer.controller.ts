import { Request, Response } from 'express';
import CustomerService from '../services/customer.service';

export default class CustomerController {
    private service: CustomerService;

    constructor() {
        this.service = new CustomerService();
    }

    public login = async (req: Request, res: Response) => {
        await this.service.createCustomer(req.body);
        return res.status(201).json({ message: 'Customer succesfully registered' });
    }

    public getAllCustomer = async (_req: Request, res: Response) => {
        const customers = await this.service.getAllCustomer();
        return res.status(200).json(customers);
    }

    public getCustomer = async (req: Request, res: Response) => {
        const { id } = req.params;
        const customer = await this.service.getCustomer(Number(id));
        return res.status(200).json(customer);
    }
}