import connection from "../database/connection";
import { ICustomer } from "../interfaces";
import CustomerModel from "../models/customer.model";
import HttpException from "../utils/HTTPException";

export default class CustomerService {
    private model: CustomerModel;

    constructor() {
        this.model = new CustomerModel(connection);
    }

    public async createCustomer(login: ICustomer) {
        const customer = await this.model.createCustomer(login);
        return customer;
    }

    public async getAllCustomer() {
        const customers = this.model.getAllCustomer();

        if(!customers) throw new HttpException('No customers found', 404);
        return customers;
    }

    public async getCustomer(id: number) {
        const customer = await this.model.getCustomer(id);
        if (customer) throw new HttpException('Id not found', 404)
        return customer;
    }
}