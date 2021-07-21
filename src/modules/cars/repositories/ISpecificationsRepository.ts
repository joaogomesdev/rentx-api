import { ICreateCategoryDTO } from "../dtos/ICreateCategoryDTO";
import { ICreateSpecificationDTO } from "../dtos/ICreateSpecificationDTO";
import { Category } from "../entities/Category";
import { Specification } from "../entities/Specification";

interface ISpecificationsRepository {
  save({ name, description }: ICreateSpecificationDTO): void;
  index(): Specification[];
  findByName(name: string): Specification;
}

export { ISpecificationsRepository };
