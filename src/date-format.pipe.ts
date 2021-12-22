/* ngx-moment (c) 2015, 2016 Uri Shaked / MIT Licence */

import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({ name: 'amDateFormat' })
export class DateFormatPipe implements PipeTransform {
  transform(value: moment.MomentInput, ...args: any[]): string {
    if (!value) {
      return '';
    }
    return moment(value).format(args[0]);
  }
}
