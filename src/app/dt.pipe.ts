import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dt'
})
export class DtPipe implements PipeTransform {

  transform(prize:string):string  {
    return prize +"DT";
  }

}
