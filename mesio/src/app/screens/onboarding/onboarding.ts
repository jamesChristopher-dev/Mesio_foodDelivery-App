import {NgZone} from '@angular/core';
import {RouterLink} from '@angular/router';
import {ElementRef, ViewChild} from '@angular/core';
import type {SwiperContainer} from 'swiper/element';
import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

@Component({
  selector: 'app-onboarding',
  imports: [RouterLink],
  templateUrl: './onboarding.html',
  styleUrl: './onboarding.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Onboarding {
  onboarding = [
    {
      id: 1,
      image: 'https://george-fx.github.io/mesio-data/onboarding/01.jpg',
      title: 'Welcome to Mesio',
      description: 'Discover amazing restaurants and delicious food delivered to your door',
    },
    {
      id: 2,
      image: 'https://george-fx.github.io/mesio-data/onboarding/02.jpg',
      title: 'Quick Food Delivery',
      description: 'Fast and reliable delivery service to bring your favorite meals in minutes',
    },
    {
      id: 3,
      image: 'https://george-fx.github.io/mesio-data/onboarding/03.jpg',
      title: 'Enjoy Your Meal',
      description: 'Track your order in real-time and enjoy fresh, hot food delivered with care',
    },
  ];

  activeIndex = 0;

  constructor(private ngZone: NgZone) {}

  @ViewChild('swiperRef', {static: true}) swiperEl?: ElementRef<SwiperContainer>;

  get activeItem() {
    return this.onboarding[this.activeIndex];
  }

  onSlideChange(): void {
    const swiper = this.swiperEl?.nativeElement.swiper;
    this.activeIndex = swiper?.activeIndex ?? 0;
  }

  ngAfterViewInit(): void {
    const el = this.swiperEl?.nativeElement;
    if (!el) return;

    this.activeIndex = el.swiper?.activeIndex ?? 0;

    el.addEventListener('swiperslidechange', () => {
      this.ngZone.run(() => {
        this.activeIndex = el.swiper?.activeIndex ?? 0;
      });
    });
  }
}
