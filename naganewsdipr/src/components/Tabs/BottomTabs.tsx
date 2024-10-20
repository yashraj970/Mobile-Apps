import { IonTabBar, IonTabButton, IonIcon, IonLabel } from "@ionic/react";
import React from "react";
import { bookmark, ellipse, home, person, square, triangle } from "ionicons/icons";

const Tabs: React.FC = () => {
  return (
    <IonTabBar slot="bottom">
      <IonTabButton tab="home" href="/home">
        <IonIcon aria-hidden="true" icon={home} />
        <IonLabel>Home</IonLabel>
      </IonTabButton>
      <IonTabButton tab="tab2" href="/tab2">
        <IonIcon aria-hidden="true" icon={bookmark} />
        <IonLabel>Bookmark</IonLabel>
      </IonTabButton>
      <IonTabButton tab="tab3" href="/tab3">
        <IonIcon aria-hidden="true" icon={person} />
        <IonLabel>Profile</IonLabel>
      </IonTabButton>
    </IonTabBar>
  );
};

export default Tabs;
