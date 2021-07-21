/* eslint-disable prettier/prettier */
import { getRepository, Repository } from "typeorm";

import { ICreateCategoryDTO } from "../../dtos/ICreateCategoryDTO";
import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>

  constructor() {
    this.repository = getRepository(Category)
  }

  // public static getInstance(): CategoriesRepository {
  //   if (!CategoriesRepository.INSTANCE) {
  //     CategoriesRepository.INSTANCE = new CategoriesRepository();
  //   }

  //   return CategoriesRepository.INSTANCE;
  // }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = await this.repository.create({ name, description})

    await this.repository.save(category)
    
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find() 

    return categories
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({ name })

    return category;
  }
}

export { CategoriesRepository };
