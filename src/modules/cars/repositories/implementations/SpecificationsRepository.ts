import { getRepository, Repository } from "typeorm";
import { ICreateCategoryDTO } from "../../dtos/ICreateCategoryDTO";
import { Specification } from "../../entities/Specification";
import { ISpecificationsRepository } from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>

  constructor() {
    this.repository = getRepository(Specification)
  }

  
  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const user =  this.repository.create({ name, description })

    await this.repository.save(user)

  }
  
  async list(): Promise<Specification[]> {
    const  specifications =  await this.repository.find();

    return specifications
  }

  async findByName(name: string): Promise<Specification> {
    const specification = await this.repository.findOne({ name })

    return specification;
  }
}

export { SpecificationsRepository };
