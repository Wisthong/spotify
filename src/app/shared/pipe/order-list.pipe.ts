import { Pipe, PipeTransform } from '@angular/core';
import { TracksModel } from '@core/models/tracks.model';

@Pipe({
  name: 'orderList'
})
export class OrderListPipe implements PipeTransform {

  transform(value: Array<any>, args: string | null = null, sort: string = 'asc'): TracksModel[] {
    console.log('👏', value);
    console.log('SORT💕', value);
    try {
      if(args === null){
        return value;
      }else{
        const tempArray =  value.sort(function (a, b) {
          if (a[args] < b[args]) {
            return -1;
          }
          else if(a[args] === b[args]){
            return 0;
          }
          else if (a[args] > b[args]) {
            return 1;
          }
          // a must be equal to b
          return 1;
        });

        return (sort === 'asc') ? tempArray: tempArray.reverse();
      }

    } catch (error) {
      console.log('Sucedio algo', error);
      return value;
    }
  }

}
