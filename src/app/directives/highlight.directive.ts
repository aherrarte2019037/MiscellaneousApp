import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[Highlight]'
})
export class HighlightDirective {

  @Input('Highlight') color: string = 'yellow';

  constructor( private elemRef: ElementRef ) {  }

  @HostListener('mouseenter') hoverElement() {
    this.elemRef.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('mouseleave') leaveElement() {
    this.elemRef.nativeElement.style.backgroundColor = null;
  }


}
