import { Pipe, PipeTransform } from '@angular/core';
import { FormArray } from '@angular/forms';

@Pipe({ name: 'filterArray' })
export class FilterArrayPipe implements PipeTransform {
  transform(controls: FormArray, filter?: string): any {
    try {
      if (controls && controls.length && filter) {
        const lstControls = [];
        for (let i = 0; i < controls.length; i++) {
          const element = controls[i];          
          const elValues = Object.values(element.getRawValue());
          const valueExist = elValues.join('').toLowerCase().includes(filter.toLowerCase());
          if (valueExist) { lstControls.push(element); };
        };
        return lstControls;
      } else { return controls; };
    } catch (error) { console.log(error); }
  }
}