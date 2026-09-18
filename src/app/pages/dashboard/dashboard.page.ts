import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutComponent } from '../../components/page-layout/page-layout.component';
import {
  HeroCarouselComponent,
  HeroSlide,
} from '../../components/hero-carousel/hero-carousel.component';

interface FeaturedProduct {
  name: string;
  price: string;
  photo: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.css'],
  standalone: true,
  imports: [CommonModule, PageLayoutComponent, HeroCarouselComponent],
})
export class DashboardPage {
  heroSlides: HeroSlide[] = [
    {
      tag: 'New Arrivals',
      title: 'Fresh From the Farm',
      subtitle: 'Premium dairy products delivered to your door',
      photo: 'assets/Carousel/Milk.png',
    },
    {
      tag: 'Limited Time',
      title: 'Weekend Discounts',
      subtitle: 'Save on your favorite dairy essentials',
      photo: 'assets/Carousel/MilkDiscounts.png',
    },
    {
      tag: 'Just In',
      title: 'New Flavors Added',
      subtitle: 'Try our latest seasonal creations',
      photo: 'assets/Carousel/MoreMilk.png',
    },
  ];

  featuredProducts: FeaturedProduct[] = [
    { name: 'FreshMoo', price: '₱299.00', photo: 'assets/Products/FreshMoo.png' },
    { name: 'Choccy Mommy', price: '₱349.00', photo: 'assets/Products/Choccy Mommy.png' },
    { name: 'BananaLoo', price: '₱199.00', photo: 'assets/Products/BananaLoo.png' },
    { name: "Dream 'n' Cream", price: '₱259.00', photo: 'assets/Products/DreamnCream.png' },
    { name: 'AstroDairy', price: '₱329.00', photo: 'assets/Products/AstroDairy.png' },
    { name: 'FreshVille', price: '₱279.00', photo: 'assets/Products/FreshVille.png' },
  ];
}
