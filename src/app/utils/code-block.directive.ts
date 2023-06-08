import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCodeBlock]'
})
export class CodeBlockDirective {

  constructor(private ele: ElementRef) {
    this.ele.nativeElement.classList.add('p-3');
    this.ele.nativeElement.classList.add('border');
    this.ele.nativeElement.classList.add('rounded');
    this.ele.nativeElement.classList.add('bg-light');
    this.ele.nativeElement.classList.add('d-inline-block');
  }

}
