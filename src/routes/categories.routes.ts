import { Router } from 'express';
// import { CreateCategoryService } from "services/CreateCategoryService";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";

import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { PostgresCategoriesRepository } from '../modules/cars/repositories/PostgresCategoriesRepository';


const categoriesRoutes = Router();
const categoriesRepository = new PostgresCategoriesRepository();

categoriesRoutes.post("/", (request,response) => {
    const { name,description } = request.body;

    const createCategoryService = new CreateCategoryService(categoriesRepository);
        
    createCategoryService.execute({name,description});

    return response.status(201).json({});
})

categoriesRoutes.get("/", (request,response) => {
    const categories =   categoriesRepository.list()

    return response.status(200).json(categories);

})

export { categoriesRoutes};