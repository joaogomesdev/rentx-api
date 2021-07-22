import { Request, Response } from "express";
import { CategoriesRepository } from "modules/cars/repositories/implementations/CategoriesRepository";
import { container } from "tsyringe";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";


class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createCategoryUseCase  = container.resolve(CreateCategoryUseCase)

    const { name, description } = request.body;

    await createCategoryUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateCategoryController };
