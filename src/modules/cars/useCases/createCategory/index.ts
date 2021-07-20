import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoriesController } from "./CreateCategoriesController";
import { CreateCategoriesService } from "./CreateCategoriesService";


const categoriesRepository = CategoriesRepository.getInstance();
const createCategoriesUseCase = new CreateCategoriesService(categoriesRepository);
const createCategoriesController = new CreateCategoriesController(createCategoriesUseCase);

export {
  createCategoriesController
}