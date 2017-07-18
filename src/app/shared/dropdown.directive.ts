import { 
	Directive, 
	ElementRef,
	HostListener,
	Renderer2,
	HostBinding
} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  open: boolean = false;
  @HostBinding('class.open') isOpen = false;
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') toggleOpen(eventData: Event) {
  	this.isOpen = !this.isOpen;
  }
}
