import { Pool, ResultSetHeader } from 'mysql2/promise';

export default class OrderModel {
    private connection: Pool;

    constructor(connection: Pool) {
        this.connection = connection;
    }

    public async createOrder(customer_id: number) {
        const [result] = await this.connection.execute<ResultSetHeader>(
            'INSERT INTO Concent.Orders(customer_id, status) VALUES(?, ?)',
            [customer_id, 'Pedido Realizado'],
        );
        const { insertId } = result;
        return { id: insertId }
    }

    public async getAll() {
        const [orders] = await this.connection.execute(
            'SELECT * FROM Concent.Orders WHERE status != ?',
            ['Finalizado']
        );
        return orders;
    }

    public async getById(orderId: number) {
        const [result] = await this.connection.execute(
            `SELECT * FROM Concent.Orders
            WHERE id = ?`, [orderId]
        );
        return result;
    }

    public async getByCustomer(customerId: number) {
        const [result] = await this.connection.execute(
            `SELECT * FROM Concent.Orders
            WHERE customer_id = ?`, [customerId]
        );
        return result;
    }

    public async updateStatus(orderId: number, status: string) {
        return this.connection.execute(
            `UPDATE Concent.Orders
            SET status = ?
            WHERE id = ?`,
            [status, orderId],
        );
    }
}