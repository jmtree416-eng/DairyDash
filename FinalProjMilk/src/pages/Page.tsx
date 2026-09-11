import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useLocation } from 'react-router';
import './Page.css';

const Page: React.FC = () => {
  const location = useLocation();
  const page = location.pathname.slice(1) || 'dashboard';
  const pageDetails = {
    dashboard: { title: 'Dashboard', eyebrow: 'OVERVIEW', description: 'Your milk shop at a glance.' },
    products: { title: 'List of Products', eyebrow: 'CATALOG', description: 'Browse and manage your product line.' },
    about: { title: 'About the App', eyebrow: 'MILKSWIFT', description: 'Everything about this application in one place.' },
    developers: { title: 'Developers', eyebrow: 'THE TEAM', description: 'Meet the people behind the application.' },
  }[page as 'dashboard' | 'products' | 'about' | 'developers'] || { title: 'Dashboard', eyebrow: 'OVERVIEW', description: 'Your milk shop at a glance.' };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{pageDetails.title}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{pageDetails.title}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <main className="page-content">
          <section className="page-intro">
            <p className="page-eyebrow">{pageDetails.eyebrow}</p>
            <h1>{pageDetails.title}</h1>
            <p>{pageDetails.description}</p>
          </section>
          <section className={`page-layout page-layout-${page}`} aria-label={`${pageDetails.title} layout`}>
            <div className="layout-placeholder layout-placeholder-large" />
            <div className="layout-placeholder layout-placeholder-highlight" />
            <div className="layout-placeholder layout-placeholder-anchor" />
          </section>
        </main>
      </IonContent>
    </IonPage>
  );
};

export default Page;
