import csvParse from "csv-parse";
import fs from "fs";

import { IImportCategoryDTO } from "../../dtos/IImportCategoryDTO";
import { LocalCategoriesRepository } from "../../repositories/implementations/LocalCategoriesRepository";

class ImportCategoriesUseCase {
  constructor(private categoriesRepository: LocalCategoriesRepository) {}

  loadCategories(file: Express.Multer.File): Promise<IImportCategoryDTO[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: IImportCategoryDTO[] = [];

      const parseFile = csvParse();

      stream.pipe(parseFile);

      parseFile
        .on("data", async (line) => {
          const [name, description] = line;

          categories.push({
            name,
            description,
          });
        })
        .on("end", () => {
          fs.promises.unlink(file.path);
          resolve(categories);
        })
        .on("error", (error) => {
          reject(error);
        });
    });
  }
  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    categories.map(async (category) => {
      const { name, description } = category;

      const existingCategory = this.categoriesRepository.findByName(name);

      if (!existingCategory) {
        this.categoriesRepository.save({
          name,
          description,
        });
      }
    });
  }
}

export { ImportCategoriesUseCase };
