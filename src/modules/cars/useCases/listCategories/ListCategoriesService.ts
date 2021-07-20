import { Request, Response } from 'express'
import { Category } from '../../model/Category';
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";


class ListCategoriesService {
    constructor(
      private categoriesRepository: ICategoriesRepository
    ){}

    execute(): Category[] {
      const categories =  this.categoriesRepository.list()

      return categories
    }
}

export {
  ListCategoriesService
}