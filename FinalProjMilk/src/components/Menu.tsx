import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { cubeOutline, gridOutline, informationCircleOutline, peopleOutline } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  icon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: gridOutline
  },
  {
    title: 'List of Products',
    url: '/products',
    icon: cubeOutline
  },
  {
    title: 'About the App',
    url: '/about',
    icon: informationCircleOutline
  },
  {
    title: 'Developers',
    url: '/developers',
    icon: peopleOutline
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <div className="menu-brand">
          <div className="menu-brand-mark">M</div>
          <div>
            <p className="menu-eyebrow">MILKSWIFT</p>
            <h1>Milk products</h1>
          </div>
        </div>
        <IonList id="inbox-list">
          <IonListHeader>Menu</IonListHeader>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" icon={appPage.icon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
        <IonNote className="menu-footer">Fresh ideas, thoughtfully made.</IonNote>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
