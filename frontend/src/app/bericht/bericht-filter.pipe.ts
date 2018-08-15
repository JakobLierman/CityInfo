import {Bericht} from './bericht.model';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'berichtFilter'
})
export class BerichtFilterPipe implements PipeTransform {

  transform(berichten: Bericht[], titel: string): Bericht[] {
    if (!berichten) {
      return [];
    }
    if (!titel || titel.length === 0) {
      return berichten;
    }
    return berichten.filter(ber => ber.titel.toLowerCase().includes(titel.toLowerCase()));
  }
}
