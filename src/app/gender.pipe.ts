import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'mail'
})

export class GenderPipe implements PipeTransform {

    transform(value:string){
        if(value.includes("@rene.us")){
            return value + '###';
        }else{
            return value;
        }
    }

}