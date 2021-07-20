import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesService } from "./ListCategoriesService";
import { ListCategoriesController } from "./ListCategoriesController";


const categoriesRepository = CategoriesRepository.getInstance();
const listCategoryUseCase = new ListCategoriesService(categoriesRepository);
const listCategoriesController = new ListCategoriesController(listCategoryUseCase);

export {
  listCategoriesController
}