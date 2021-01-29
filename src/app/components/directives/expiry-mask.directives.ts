import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[formControlName][appExpiryMask]',
})
export class ExpiryMaskDirective {

  @HostListener('input', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;

    const trimmed = input.value.replace(/\s+/g, '').slice(0, input.value.indexOf('/') == -1 ? 4 : 5);
    if (trimmed.length == 2) {
      return (input.value = `${trimmed.slice(0, 2)}/`);
    }
  }

}  
