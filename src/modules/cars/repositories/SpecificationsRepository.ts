import { ICreateCategoryDTO } from "../dtos/ICreateCategoryDTO";
import { Specification } from "../model/Specification";
import { ISpecificationsRepository } from "./ISpecificationsRepository";


class SpecificationsRepository  implements ISpecificationsRepository { 
  private specifications: Specification[]

  constructor(){
    this.specifications = []
  }

  list(): Specification[] {
    return this.specifications;
  }
  
  create({ name, description }: ICreateCategoryDTO): void  {
    
    const category = new Specification();
    Object.assign(category, {
      name,
      description,
      created_at: new Date()
    })
    
    this.specifications.push(category)
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(specification => specification.name === name);

    return specification;
  }

 


}

export { SpecificationsRepository }