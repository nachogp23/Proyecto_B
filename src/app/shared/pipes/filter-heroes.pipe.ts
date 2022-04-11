import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from 'src/app/core/services/models/hero.models';
@Pipe({
  name: 'filterHeroes'
})
export class FilterHeroesPipe implements PipeTransform {

  transform(heroes: Hero[], filterValue: string): Hero[] {
    return heroes.filter(value => value.hero.toLowerCase().includes(filterValue.toLowerCase()));
  }

}
