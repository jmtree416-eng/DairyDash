import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonSearchbar } from '@ionic/angular';
import { PageLayoutComponent } from '../../components/page-layout/page-layout.component';

interface Product {
  name: string;
  price: string;
  description: string;
  photo?: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.css'],
  standalone: true,
  imports: [CommonModule, IonSearchbar, PageLayoutComponent],
})
export class ProductsPage {
  searchQuery: string = '';

  products: Product[] = [
    {
      name: 'FreshMoo',
      price: '₱299.00',
      description: 'Freshly made and produced milk',
      photo: 'assets/Products/FreshMoo.png',
    },
    {
      name: 'Choccy Mommy',
      price: '₱349.00',
      description: 'Rich chocolate-flavored dairy drink',
      photo: 'assets/Products/Choccy Mommy.png',
    },
    {
      name: 'BananaLoo',
      price: '₱199.00',
      description: 'Creamy probiotic yogurt blend',
      photo: 'assets/Products/BananaLoo.png',
    },
    {
      name: "Dream 'n' Cream",
      price: '₱259.00',
      description: 'A rich, dreamy blend of fresh cream and milk',
      photo: 'assets/Products/DreamnCream.png',
    },
    {
      name: 'AstroDairy',
      price: '₱329.00',
      description: 'An adventurous, out-of-this-world dairy blend',
      photo: 'assets/Products/AstroDairy.png',
    },
    {
      name: 'FreshVille',
      price: '₱279.00',
      description: 'Farm-fresh dairy essentials made daily',
      photo: 'assets/Products/FreshVille.png',
    },
    {
      name: 'Strawberry Dreams',
      price: '₱150.00',
      description: 'Strawberry flavored milk',
      photo: 'assets/Products/Strawberry Dreams.png',
    },
    {
      name: 'Lattevia',
      price: '₱189.00',
      description: 'A smooth, latte-inspired dairy delight',
      photo: 'assets/Products/Lattevia.png',
    },
    {
      name: 'PastureBorne',
      price: '₱219.00',
      description: 'Pure milk sourced straight from open pastures',
      photo: 'assets/Products/PastureBorne.png',
    },
    {
      name: 'Mjölk Klide',
      price: '₱249.00',
      description: 'Traditional oat and dairy style blend',
      photo: 'assets/Products/Mjölk Klide.png',
    },
    {
      name: 'Premium MilkMoo',
      price: '₱319.00',
      description: 'Specially pasteurized whole milk',
      photo: 'assets/Products/premium_milkmoo.png',
    },
  ];

  get filteredProducts(): Product[] {
    if (!this.searchQuery.trim()) {
      return this.products;
    }
    const q = this.searchQuery.toLowerCase();
    return this.products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }

  handleSearch(event: any) {
    this.searchQuery = event?.detail?.value ?? '';
  }
}
