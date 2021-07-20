import { Router } from 'express'
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationsRepository';
import { CreateCategoryService } from '../modules/cars/services/CreateCategoryService';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';


const specificationRoutes = Router();
const specificationsRepository = new SpecificationsRepository();



specificationRoutes.post('/', (request, response) => {
  const { 
    name,
    description,
  } = request.body;

  const createCategoryService = new CreateSpecificationService(specificationsRepository);
  
  createCategoryService.execute({ name, description })
  return response.status(201).send();

})

specificationRoutes.get('/', (request, response) => {

  const categories = specificationsRepository.list()

  return response.status(201).json(categories);

})

export { 
  specificationRoutes 
}