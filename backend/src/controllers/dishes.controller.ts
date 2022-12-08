import { Request, Response } from 'express';
import DishesService from "../services/dishes.service";

export default class DishesController {
    private service: DishesService;

    constructor() {
        this.service = new DishesService();
    }

    public createDish = async (req: Request, res: Response) => {
        const dish = await this.service.createDish(req.body);
        return res.status(201).json({ message: 'Dish created' });
    }

    public getAllDishes = async (req: Request, res: Response) => {
        const dishes = await this.service.getAllDishes();
        return res.status(200).json(dishes);
    }

    public getByQuery = async (req: Request, res: Response) => {
        const { q } = req.query;
        if (q === 'active') {
            const dishes = await this.service.getByActive();
            return res.status(200).json(dishes);
        }
        const dishes = await this.service.getByCategory(q as string);
        return res.status(200).json(dishes);
    }

    public updateDish = async (req: Request, res: Response) => {
        const { id } = req.params;
        const { key, value } = req.body;
        const dish = await this.service.updateDish(key, value, Number(id));
        return res.status(200).json(dish);
    }

    public inactiveDish = async (req: Request, res: Response) => {
        const { id } = req.params;
        await this.service.inactiveDish(Number(id));
        return res.status(200).json({ message: 'Inactivated' });
    }
}