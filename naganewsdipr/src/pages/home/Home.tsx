import {
  IonContent,
  IonHeader,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import HomeNewsList from "./home-news-list/home-news-list";
import HomePhotoNews from "./home-news/HomePhotoNews";
import HomeVideoNews from "./home-news/HomeVideoNews";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonSearchbar placeholder="Search" />

      {/* <HomeNewsList newstype={"photonews"} /> */}
      {/* <HomePhotoNews /> */}
      {/* <HomeVideoNews /> */}
    </IonPage>
  );
};

export default Home;
