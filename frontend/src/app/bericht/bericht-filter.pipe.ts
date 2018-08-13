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
    if (!titel || titel.length === 0) {
      return berichten;
    }
    const regioFilter = berichten.filter(ber => ber.user.regio === regio);
    return regioFilter.filter(ber => ber.titel.toLowerCase().startsWith(titel.toLowerCase()));
  }
}
