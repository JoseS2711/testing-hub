import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator"



export class CreateTestDTO{
    
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    password: string

    @IsString()
    @IsNotEmpty()
    name: string
    
    @IsNumber()
    @IsNotEmpty()
    age: number
}