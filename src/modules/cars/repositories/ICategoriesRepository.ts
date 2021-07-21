import { ICreateCategoryDTO } from "../dtos/ICreateCategoryDTO";
import { Category } from "../entities/Category";

interface ICategoriesRepository {
  save({ name, description }: ICreateCategoryDTO): Promise<void>;
  index(): Promise<Category[]>;
  findByName(name: string): Promise<Category>;
}

export { ICategoriesRepository };
