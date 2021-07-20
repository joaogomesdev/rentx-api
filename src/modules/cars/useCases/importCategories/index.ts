import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoriesController } from "./ImportCategoriesController";
import { ImportCategoriesService } from "./ImportCategoriesService";

const categoriesRepository = CategoriesRepository.getInstance();
const importCategoriesService = new ImportCategoriesService(categoriesRepository);
const importCategoriesController = new ImportCategoriesController(importCategoriesService);


export { importCategoriesController }