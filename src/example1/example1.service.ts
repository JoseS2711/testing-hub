import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import { CreateTestDTO } from './DTO/CreateTest.dto';

@Injectable()
export class Example1Service {

    private examp: any[] = [];

    getExample(){
        return this.examp;
    }

    patchingExample(id:number){
        const result= this.examp.find(value=> value.id ===id )
        
        if(!result){
            return new NotFoundException('La prueba no ha sido encontrada')
        
        }
        return result
        
        
    }

    CreateExample(value:CreateTestDTO){
        console.log(value)
        this.examp.push({
            ...value,
            id: this.examp.length+1
        })
        return value;
    }


}
