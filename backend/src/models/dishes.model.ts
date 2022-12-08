import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IDish } from '../interfaces/index';


export default class DishesModel {
    private connection: Pool;

    constructor(connection: Pool) {
        this.connection = connection;
    }

    public async createDishes(dish: IDish): Promise<IDish> {
        const { title, category, price, photo, finishIn } = dish;
        const [result] = await this.connection.execute<ResultSetHeader>(
            'INSERT INTO Concent.Dishes(title, category, price, photo, finish_in, active) VALUES (?, ?, ?, ?, ?, ?)',
            [title, category, price, photo, finishIn, true],
        )
        const { insertId } = result;
        return { id: insertId, ...dish }
    }

    public async getAllDishes(): Promise<IDish[]> {
        const [result] = await this.connection.execute('SELECT * FROM Concent.Dishes');
        return result as IDish[];
    }

    public async getDish(dish: IDish) {
        const { title } = dish;
        const [result] = await this.connection.execute(
            'SELECT * FROM Concent.Dishes WHERE title = ?',
            [title],
            );
        return result;
    }

    public async getByCategory(category: string) {
        const [dishes] = await this.connection.execute(
            `SELECT * FROM Concent.Dishes
            WHERE category = ?`,
            [category],
        )
        return dishes;
    }

    public async getByActive(){
        const [dishes] = await this.connection.execute(
            'SELECT * FROM Concent.Dishes WHERE active = true'
        );
        return dishes;
    }

    private query(param: string) {
        return `UPDATE Concent.Dishes SET ${param} = ? WHERE id = ?`
    }

    public async updateDish(key: string, value: string, id: number): Promise<void> {
        switch (key) {
            case 'title':
                await this.connection.execute(this.query(key), [value, id]);
                break;
            case 'category':
                await this.connection.execute(this.query(key), [value, id]);
                break;
            case 'price':
                await this.connection.execute(this.query(key), [value, id]);
                break;
            case 'photo':
                await this.connection.execute(this.query(key), [value, id]);
                break;
            case 'finish_in':
                await this.connection.execute(this.query(key), [value, id]);
                break;
    }
}

    public async inactiveDish(id: number): Promise<void> {
        await this.connection.execute(
            `UPDATE Concent.Dishes
            SET active = false
            WHERE id = ?`,
            [id],
        );
    }
}

