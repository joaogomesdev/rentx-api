import { ICreateCategoryDTO } from "../dtos/ICreateCategoryDTO";
import { CategoryRepository } from "../repositories/CategoryRepository";



class CreateCategoryService {
    constructor(
      private categoriesRepository: CategoryRepository
    ){}

    execute({ name, description } : ICreateCategoryDTO): void  {
      const categoryAlreadyExists = this.categoriesRepository.findByName(name);

      if(categoryAlreadyExists){
        throw new Error('Category already exists')
      }
      
      this.categoriesRepository.create({ name,description })
    }
}

export {
  CreateCategoryService
}