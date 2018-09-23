import { Directive, ElementRef, OnInit, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective implements OnInit {
   @HostBinding('style.color') bgc: string;
   @Input() defaultColor ;
  constructor(private el: ElementRef) { }
 
  ngOnInit(): void {
    //  this.el.nativeElement.style.color = 'Red';
     this.bgc = this.defaultColor;
  }

  // @HostListener('mouseenter') mouseEnter(evet: Event) {
  //   console.log(event);
  //   this.el.nativeElement.style.color = 'Blue';
  // }
  // @HostListener('mouseleave') mouseLeave(evet: Event) {
  //   console.log('event');
  //   this.el.nativeElement.style.color = 'Green';
  // }

}
