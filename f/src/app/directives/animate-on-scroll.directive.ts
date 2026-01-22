import { Directive, ElementRef, Renderer2, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appAnimateOnScroll]',
  standalone: true
})
export class AnimateOnScrollDirective implements OnInit, OnDestroy {
  private observer: IntersectionObserver | undefined;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // Add initial class to hide element
    this.renderer.addClass(this.el.nativeElement, 'scroll-hidden');

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1 // Trigger when 10% visible
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'scroll-visible');
          // Optional: Stop observing once visible to run only once
          this.observer?.unobserve(entry.target);
        }
      });
    }, options);

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
