import {Bericht} from './bericht.model';
import {Pipe, PipeTransform} from '@angular/core';
import {Regio} from "../user/user.model";

@Pipe({
  name: 'berichtFilter'
})
export class BerichtFilterPipe implements PipeTransform {

  transform(berichten: Bericht[], regio: Regio, titel: string): Bericht[] {
    berichten.filter(rec => rec.user.regio === regio);
    if ((!titel || titel.length === 0) && !regio) {
      return berichten;
    }
    return berichten.filter(ber => ber.titel.toLowerCase().startsWith(titel.toLowerCase()));
  }
}
