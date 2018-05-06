import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: Array<any>, value: string): Array<any> {
      if(!value){
        return items;
      }

      return items.filter(item =>
        item.toLowerCase().indexOf(value.toLowerCase()) === 0
      );
    }
}
