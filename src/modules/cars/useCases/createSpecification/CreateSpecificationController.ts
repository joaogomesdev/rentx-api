import { Request, Response } from 'express'
import { CreateSpecificationService } from './CreateSpecificationService';

class CreateSpecificationController {

  constructor(
    private createSpecificationService: CreateSpecificationService
  ) {}
  handle(request: Request, response: Response) {
    const { 
      name,
      description,
    } = request.body;
    
    this.createSpecificationService.execute({ name, description })
    return response.status(201).send();
  }
}

export {
  CreateSpecificationController
}