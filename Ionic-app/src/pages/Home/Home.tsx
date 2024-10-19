import {
  IonContent,
  IonHeader,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
  IonItem,
  IonList,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import "./Home.css";
import Modal from "../../components/Modal/Modal";
import TopTabs from "../../components/TopTabs/TopTabs";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
        <TopTabs />
      </IonHeader>

      <IonContent fullscreen>
        <Modal />
      </IonContent>
      <IonSearchbar placeholder="Placeholder"></IonSearchbar>
    </IonPage>
  );
};

export default Home;
