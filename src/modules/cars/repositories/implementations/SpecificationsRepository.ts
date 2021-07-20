import { ICreateCategoryDTO } from "../../dtos/ICreateCategoryDTO";
import { ISpecificationsRepository } from "../ISpecificationsRepository";
import { Specification } from "../../model/Specification";


class SpecificationsRepository  implements ISpecificationsRepository { 
  private specifications: Specification[]
  private static INSTANCE: SpecificationsRepository
  
  constructor(){
    this.specifications = []
  }

  public static getInstance(): SpecificationsRepository {
    if(!SpecificationsRepository.INSTANCE){
      SpecificationsRepository.INSTANCE = new SpecificationsRepository()
    }

    return SpecificationsRepository.INSTANCE
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