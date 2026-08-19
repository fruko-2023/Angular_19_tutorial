import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'custom',
  pure:false
})
export class CustomPipe implements PipeTransform {

  private datePipe = new DatePipe('en-US');
  

  //FIRST CUSTOMIZE
  // transform(value: any, ...args: any[]): any {
  //   return value ? '+91 ' + value : value;
  // }
  //SECOND CUSTOMIZE
    transform(value: any, ...args: any[]): any {
      // if(value =='' || value == null || value== undefined)
      // {
      //   return 'NA';
      // }
      // else
      // {
      //   return value ? '+91 ' + value : value;
      // }
    //THIRD CUSTOMIZE
    // return this.datePipe.transform(value,'MM/YYYY');
    // return this.datePipe.transform(value,'MM/YYYY');
    return this.datePipe.transform(value,'dd-MM-YYYY');
  }
}
