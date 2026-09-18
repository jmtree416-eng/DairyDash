import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface HeroSlide {
  tag: string;
  title: string;
  subtitle: string;
  photo?: string;
}

@Component({
  selector: 'app-hero-carousel',
  templateUrl: './hero-carousel.component.html',
  styleUrls: ['./hero-carousel.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class HeroCarouselComponent implements OnInit, OnDestroy {
  @Input() slides: HeroSlide[] = [];
  @Input() intervalMs: number = 5000;

  activeIndex = 0;
  private timer: any;
  private touchStartX: number | null = null;

  ngOnInit() {
    if (this.slides.length > 1) {
      this.timer = setInterval(() => {
        this.activeIndex = (this.activeIndex + 1) % this.slides.length;
      }, this.intervalMs);
    }
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  goTo(index: number) {
    this.activeIndex = (index + this.slides.length) % this.slides.length;
  }

  handleTouchStart(e: TouchEvent) {
    this.touchStartX = e.touches[0].clientX;
  }

  handleTouchEnd(e: TouchEvent) {
    if (this.touchStartX === null) return;
    const deltaX = e.changedTouches[0].clientX - this.touchStartX;
    if (deltaX > 50) {
      this.goTo(this.activeIndex - 1);
    } else if (deltaX < -50) {
      this.goTo(this.activeIndex + 1);
    }
    this.touchStartX = null;
  }
}
