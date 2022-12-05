import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateFormatPipe',
})

export class DateFormatPipe implements PipeTransform {
  transform(value: string) {
      const datePipe = new DatePipe('en-UK');

      value = datePipe.transform(value, 'EE, MMMM d, yy') as string;

    return value;
  }
}
