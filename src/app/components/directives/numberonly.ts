import { Directive, HostListener, ElementRef } from "@angular/core";
import { NgControl } from "@angular/forms";

@Directive({
    selector: "[numberOnly]"
})
export class NumberonlyDirective {
    private el: NgControl;
    key;

    constructor(private ngControl: NgControl) {
        this.el = ngControl;
    }
 
    @HostListener("input", ["$event"]) onKeydown(event) {
        // this.key = event.keyCode;
        // charCode > 31 && (charCode < 48 || charCode > 57)
        // if ((this.key > 31 && this.key <  48) || (this.key == 189) || (this.key == 8) || (this.key == 37) || (this.key == 39) || (this.key == 46) || (this.key == 32)) {
        //     return;
        // } else {
        //     event.preventDefault();
        // }

        this.el.control.patchValue(event.target.value.replace(/[^0-9]/g, ''));
    }
}
