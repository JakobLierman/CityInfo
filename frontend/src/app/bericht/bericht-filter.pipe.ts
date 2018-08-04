import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'berichtFilter'
})
export class BerichtFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
