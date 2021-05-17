import { Response,Request} from "express";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";


class ListCategoriesController {

    constructor(private listCategoriesUseCase: ListCategoriesUseCase){}

    handle(request: Request, response:Response): Response {
        const all = this.listCategoriesUseCase.execute();

        return response.json(all);

    }
}


export { ListCategoriesController};