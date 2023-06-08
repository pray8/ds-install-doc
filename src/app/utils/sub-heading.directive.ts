import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSubHeading]'
})
export class SubHeadingDirective {

  constructor(private ele: ElementRef) {
    (this.ele.nativeElement as HTMLElement).classList.add('p-2');
    (this.ele.nativeElement as HTMLElement).classList.add('bg-light');
    (this.ele.nativeElement as HTMLElement).classList.add('border');
    (this.ele.nativeElement as HTMLElement).classList.add('rounded');
    (this.ele.nativeElement as HTMLElement).classList.add('text-dark');
    (this.ele.nativeElement as HTMLElement).classList.add('font-16');
    (this.ele.nativeElement as HTMLElement).classList.add('fw-600');
  }

}
