import { Pipe, PipeTransform } from '@angular/core';
import { bands, Band } from './bands';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<Band>, searchStr: string): Array<Band> {
    return value.filter(band => {
      return band.bandname.toLowerCase()
      .includes(searchStr.toLowerCase()) || band.bandname.toLowerCase()
      .includes(searchStr.toLowerCase()) || band.bandname.toLowerCase()
      .includes(searchStr.toLowerCase());
    });
  }

}
