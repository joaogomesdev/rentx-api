import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationService } from "./CreateSpecificationService"


const specificationsRepository = SpecificationsRepository.getInstance();
const createSpecificationUseCase = new CreateSpecificationService(specificationsRepository);
const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);

export {
  createSpecificationController
}