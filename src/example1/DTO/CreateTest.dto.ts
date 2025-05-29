import { IsString } from "class-validator"



export class CreateTestDTO{
    @IsString()
    tittle: string
    Description: string
}