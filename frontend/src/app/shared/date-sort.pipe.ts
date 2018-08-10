import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateSort'
})
export class DateSortPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
