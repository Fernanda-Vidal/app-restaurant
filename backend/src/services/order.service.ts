import connection from '../database/connection';
import { IOrderDish } from '../interfaces';
import CustomerModel from '../models/customer.model';
import OrderModel from '../models/order.model';
import OrderDishes from '../models/orderDishes.model';
import HttpException from '../utils/HTTPException';


export default class OrderService {
    private model: OrderModel;
    private modelOrderDish = new OrderDishes(connection);

    constructor() {
        this.model = new OrderModel(connection);
    }

    public async createOrder(customer_id: number, dishes: IOrderDish[]) {
        const orderId = await this.model.createOrder(customer_id);
        await Promise.all(dishes.map(async (item) => (
            await this.modelOrderDish.create(orderId.id, item.dish_id, item.quantity)
        )))
        return orderId;
    }

    public async getAll() {
        const orders = await this.model.getAll();
        if (!orders) throw new HttpException('No orders found', 404);
        return orders;
    }

    public async getById(orderId: number) {
        const order = await this.model.getById(orderId);
        if (!order) throw new HttpException('No order found', 404);
        return order;
    }

    public async updateStatus(orderId: number, status: string) {
        return this.model.updateStatus(orderId, status);
    }

}