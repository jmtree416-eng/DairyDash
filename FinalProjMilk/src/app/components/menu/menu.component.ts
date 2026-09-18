import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  IonMenu,
  IonContent,
  IonList,
  IonListHeader,
  IonItem,
  IonIcon,
  IonLabel,
  IonNote,
  IonMenuToggle,
} from '@ionic/angular/standalone';

interface AppPage {
  title: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    IonMenu,
    IonContent,
    IonList,
    IonListHeader,
    IonItem,
    IonIcon,
    IonLabel,
    IonNote,
    IonMenuToggle,
  ],
})
export class MenuComponent {
  appPages: AppPage[] = [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'grid-outline',
    },
    {
      title: 'List of Products',
      url: '/products',
      icon: 'cart-outline',
    },
    {
      title: 'About the App',
      url: '/about',
      icon: 'information-circle-outline',
    },
    {
      title: 'Developers',
      url: '/developers',
      icon: 'people-outline',
    },
  ];
}
