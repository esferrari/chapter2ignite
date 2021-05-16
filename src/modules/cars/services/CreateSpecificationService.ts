import { ISpecificationRepository } from "../repositories/ISpecificationRepository";


interface IRequest {
    name:string;
    description: string;
}

class CreateSpecificationService {

    constructor(private specificationsRepository: ISpecificationRepository){}

    execute({name,description}: IRequest): void {
        const specificationAlreadyExists = this.specificationsRepository.findByname(name);

        if(specificationAlreadyExists){
            throw new Error("Specification alreadt exists");
        }

        this.specificationsRepository.create({name,description});
    }
}


export {CreateSpecificationService}