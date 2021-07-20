class ImportCategoriesService {
  constructor(){

  }

  execute(file: Express.Multer.File ): void  {
    console.log(file);
    
  }
}

export { ImportCategoriesService }