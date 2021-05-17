import { Router } from 'express';

import { createCategoryController } from '../modules/cars/UseCases/CreateCategory';
import { ListCategoriesController } from '../modules/cars/UseCases/listCategories';


const categoriesRoutes = Router();

categoriesRoutes.post("/", (request,response) => {
    return createCategoryController.handle(request, response);
})

categoriesRoutes.get("/", (request,response) => {
    const categories =   ListCategoriesController.handle(request,response);

    return response.status(200).json(categories);

})

export { categoriesRoutes};