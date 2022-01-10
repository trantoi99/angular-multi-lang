import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mytranslate'
})
export class TranslatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
