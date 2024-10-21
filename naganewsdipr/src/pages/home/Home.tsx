import {
  IonContent,
  IonHeader,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import HomePhotoNews from "./home-news/HomePhotoNews";
import HomeVideoNews from "./home-news/HomeVideoNews";
import HomeNagaNews from "./home-news/HomeNagaNews";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSearchbar placeholder="Search" />

        {/* <HomePhotoNews /> */}
        <HomeNagaNews />
        {/* <HomeVideoNews /> */}
      </IonContent>
    </IonPage>
  );
};

export default Home;
