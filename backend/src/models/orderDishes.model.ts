import { Pool, ResultSetHeader } from 'mysql2/promise';

export default class OrderDishes {
    private connection: Pool;

    constructor(connection: Pool) {
        this.connection = connection;
    }

    public async create(orderId: number, dish_id: number, quantity: number) {
        const [result] = await this.connection.execute<ResultSetHeader>(
            'INSERT INTO Concent.OrderDishes(order_id, dish_id, quantity) VALUES(?, ?, ?)',
            [orderId, dish_id, quantity],
        );
        return result;
    }
}