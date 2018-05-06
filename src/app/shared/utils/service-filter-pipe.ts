import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'serviceFilter'
})
export class ServiceFilterPipe implements PipeTransform {
    transform(items: Array<any>, value: string): Array<any> {
      if(!value){
        return items;
      }

        return items.filter(item =>
          item.owner_name.indexOf(value) !== -1 ||
          item.address.indexOf(value) !== -1 ||
          item.identifier.indexOf(value) !== -1
        );
    }
}
