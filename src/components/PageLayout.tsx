import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./PageLayout.css";

interface PageLayoutProps {
  title: string;
  eyebrow: string;
  description: string;
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  eyebrow,
  description,
  children,
}) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{title}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <main className="page-content">
          <section className="page-intro">
            <p className="page-eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <p>{description}</p>
          </section>
          {children}
        </main>
      </IonContent>
    </IonPage>
  );
};

export default PageLayout;
