import {Bericht} from './bericht.model';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'berichtFilter'
})
export class BerichtFilterPipe implements PipeTransform {

  transform(berichten: Bericht[], regio: string, titel: string): Bericht[] {
    if (!berichten) {
      return [];
    }
    const berichtenPerRegio = berichten.filter(ber => ber.user.regio === regio);
    if (!titel || titel.length === 0) {
      return berichtenPerRegio;
    }
    return berichtenPerRegio.filter(ber => ber.titel.toLowerCase().includes(titel.toLowerCase()));
  }
}
