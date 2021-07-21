import { ICreateCategoryDTO } from "../dtos/ICreateCategoryDTO";
import { ICreateSpecificationDTO } from "../dtos/ICreateSpecificationDTO";
import { Category } from "../entities/Category";
import { Specification } from "../entities/Specification";

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationDTO): void;
  findByName(name: string): Specification;
  list(): Specification[];
}

export { ISpecificationsRepository };
