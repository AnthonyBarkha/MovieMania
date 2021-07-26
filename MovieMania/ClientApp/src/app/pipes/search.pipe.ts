import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, search: string): any {
    if (value.length === 0 || search === '') {
      return value;
    }
    const result = [];
    for (const item of value) {
      if (item.title.toLowerCase().includes(search.toLowerCase())) {
        result.push(item);
      }
    }
    return result;
  }

}
