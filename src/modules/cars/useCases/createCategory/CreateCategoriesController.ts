import { Request, Response } from 'express'
import { CreateCategoriesService } from './CreateCategoriesService';

class CreateCategoriesController {

  constructor(
    private createCategoryService: CreateCategoriesService
  ) {}
  handle(request: Request, response: Response) {
    const { 
      name,
      description,
    } = request.body;
  
    this.createCategoryService.execute({ name, description })
    
    return response.status(201).send();
  }
}

export {
  CreateCategoriesController
}