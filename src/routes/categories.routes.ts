import { Router } from 'express'
import { CategoryRepository } from '../repositories/CategoryRepository';
import { CreateCategoryService } from '../services/CreateCategoryService';


const categoriesRoutes = Router();
const categoriesRepository = new CategoryRepository();



categoriesRoutes.post('/', (request, response) => {
  const { 
    name,
    description,
  } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);
  
  createCategoryService.execute({ name, description })
  return response.status(201).send();

})

categoriesRoutes.get('/', (request, response) => {

  const categories = categoriesRepository.list()

  return response.status(201).json(categories);

})

export { 
  categoriesRoutes 
}