import { Request, Response } from 'express'
import { ListCategoriesService } from './ListCategoriesService';


class ListCategoriesController {

  constructor(
    private listCategoriesService: ListCategoriesService
  ) {}

  handle(request: Request, response: Response) : Response {
    const all = this.listCategoriesService.execute()

    return response.json(all);
  }
}

export {
  ListCategoriesController
}