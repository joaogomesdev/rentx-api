import { ImportCategoriesController } from "./ImportCategoriesController";
import { ImportCategoriesService } from "./ImportCategoriesService";


const importCategoriesService = new ImportCategoriesService();
const importCategoriesController = new ImportCategoriesController(importCategoriesService);


export { importCategoriesController }