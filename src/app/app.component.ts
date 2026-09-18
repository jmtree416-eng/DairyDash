import { Component } from '@angular/core';
import { IonApp, IonSplitPane, IonRouterOutlet } from '@ionic/angular';
import { MenuComponent } from './components/menu/menu.component';
import { addIcons } from 'ionicons';
import {
  gridOutline,
  cubeOutline,
  cartOutline,
  informationCircleOutline,
  peopleOutline,
  timeOutline,
  medicalOutline,
  leafOutline,
  ribbonOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  standalone: true,
  imports: [IonApp, IonSplitPane, IonRouterOutlet, MenuComponent],
})
export class AppComponent {
  constructor() {
    addIcons({
      gridOutline,
      cubeOutline,
      cartOutline,
      informationCircleOutline,
      peopleOutline,
      timeOutline,
      medicalOutline,
      leafOutline,
      ribbonOutline,
      'grid-outline': gridOutline,
      'cube-outline': cubeOutline,
      'cart-outline': cartOutline,
      'information-circle-outline': informationCircleOutline,
      'people-outline': peopleOutline,
      'time-outline': timeOutline,
      'medical-outline': medicalOutline,
      'leaf-outline': leafOutline,
      'ribbon-outline': ribbonOutline,
    });
  }
}
