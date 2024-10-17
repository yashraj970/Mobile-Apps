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
    <>
      <TopTabs />
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <Modal />
        </IonContent>
        <IonSearchbar placeholder="Placeholder"></IonSearchbar>

        <IonItem>
          <IonSelect
            label="Fixed label"
            labelPlacement="fixed"
            placeholder="Favorite fruit"
          >
            <IonSelectOption value="apple">Apple</IonSelectOption>
            <IonSelectOption value="banana">Banana</IonSelectOption>
            <IonSelectOption value="orange">Orange</IonSelectOption>
          </IonSelect>
        </IonItem>
      </IonPage>
    </>
  );
};

export default Home;
