import connection from "../database/connection";
import { IDish } from "../interfaces";
import DishesModel from "../models/dishes.model";
import HttpException from "../utils/HTTPException";

export default class DishesService {
    private model: DishesModel;

    constructor() {
        this.model = new DishesModel(connection);
    }
    
    public async createDish(dish: IDish) {
        const newDish = await this.model.createDishes(dish);
        return newDish;
    }

    public async getAllDishes() {
        const dishes = this.model.getAllDishes();
        if (!dishes) throw new HttpException('No dishes found', 404);
        return dishes;
    }

    public async getByCategory(category: string) {
        const dishes = await this.model.getByCategory(category);
        if (!dishes) throw new HttpException(`No ${category} found`, 404);
        return dishes;
    }

    public async getByActive() {
        const dishes = await this.model.getByActive();
        if (!dishes) throw new HttpException('No active dish found', 404);
        return dishes;
    }

    public async updateDish(key: string, value: string, id: number) {
        return await this.model.updateDish(key, value, id);
    }

    public async inactiveDish(id: number) {
        return this.model.inactiveDish(id);
    }
}