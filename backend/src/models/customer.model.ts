import { Pool, ResultSetHeader } from 'mysql2/promise';
import { ICustomer } from '../interfaces';

export default class CustomerModel {
    private connection: Pool;

    constructor(connection: Pool) {
        this.connection = connection;
    }

    public async createCustomer(login: ICustomer) {
        const { name, cpf, table } = login;
        const [result] =  await this.connection.execute<ResultSetHeader>(
            `INSERT INTO Concent.Customer(name, cpf, number_table)
            VALUES (?, ?, ?)`, [name, cpf, table],
        );
        return result;
    }

    public async getAllCustomer() {
        const [result] = await this.connection.execute('SELECT * FROM Concent.Customer');
        return result;
    }

    public async getCustomer(id: number) {
        const [result] = await this.connection.execute(
            'SELECT * FROM Concent.Customer WHERE id = ?',
            [id]
            );

        return result;
    }
}