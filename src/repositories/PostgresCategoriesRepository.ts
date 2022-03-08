import { Category } from "../model/Category";
import {
    ICategoriesRepository,
    ICreateCategoryDTO,
} from "../services/ICategoriesRepository";

class PostgresCategoriesRepository implements ICategoriesRepository {
    create({ name, description }: ICreateCategoryDTO): void {
        throw new Error("Method not implemented.");
    }
    list(): Category[] {
        throw new Error("Method not implemented.");
    }
    findByName(name: string): Category {
        throw new Error("Method not implemented.");
    }
}

export { PostgresCategoriesRepository };
