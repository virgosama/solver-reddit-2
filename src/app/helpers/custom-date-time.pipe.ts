import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'customDateTime'
})
export class CustomDateTimePipe implements PipeTransform {

  transform(value: number): string {
    return new Date(value * 1000).toLocaleString();
  }

}
