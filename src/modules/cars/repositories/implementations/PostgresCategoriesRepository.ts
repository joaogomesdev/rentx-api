import { ICreateCategoryDTO } from "modules/cars/dtos/ICreateCategoryDTO";
import { Category } from "modules/cars/entities/Category";
import { getRepository, Repository } from "typeorm";

import { ICategoriesRepository } from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;
  constructor() {
    this.repository = getRepository(Category);
  }

  async save({ description, name }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      description,
      name,
    });

    await this.repository.save(category);
  }

  async index(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async findByName(name: string): Promise<Category> {
    // Select * from categories where name = "name" limit 1
    const category = await this.repository.findOne({ name });
    return category;
  }
}

export { CategoriesRepository };
