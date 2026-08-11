import { Component, AfterViewInit, ElementRef, inject } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements AfterViewInit {
  private el = inject(ElementRef);

  ngAfterViewInit() {
    // Animate hero elements on load
    const elements = this.el.nativeElement.querySelectorAll('.hero-animate');
    elements.forEach((el: HTMLElement, i: number) => {
      el.style.animationDelay = `${i * 0.15 + 0.3}s`;
      el.classList.add('animate-in');
    });
  }
}
