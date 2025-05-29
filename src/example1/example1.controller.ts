import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { Example1Service } from './example1.service';
import { CreateTestDTO } from './DTO/CreateTest.dto';

@Controller('/example')
export class Example1Controller {

    constructor(private Example1Service:Example1Service){}

    @Get()
    getExamples(@Query() value2:string){
        console.log(value2)
        return this.Example1Service.getExample();
    }

    @Get('/:id')
    getallExamples(@Param('id') id:string){
        console.log(id)
        return this.Example1Service.patchingExample(parseInt(id));
    }
    



    @Post()
    @UsePipes(new ValidationPipe())
    createExample(@Body() value:CreateTestDTO){
        return this.Example1Service.CreateExample(value);
    }

    






}