import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, key: any): any {
    if(key == undefined){
      return value;
    }else{
      return value.filter(val=>{
         if(val.email.toLowerCase().includes(key.toLowerCase())){
           return val.email.toLowerCase().includes(key.toLowerCase());
         }else{
           return val.id.includes(key);
         }
      });
    }  
  }
}
