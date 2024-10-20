import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonButtons,
  IonMenuButton,
} from "@ionic/react";
import {
  homeOutline,
  informationCircleOutline,
  callOutline,
} from "ionicons/icons";
import { useLocation } from "react-router";
import ToggleDarkmode from "../ToggleDarkmode/ToggleDarkmode";

function Sidebar() {
  const location = useLocation();

  // Determine title based on current route
  const getTitle = () => {
    switch (location.pathname) {
      case "/about":
        return "About DIPR";
      case "/home":
        return "Home";
      case "/contact":
        return "Contact Us";
      default:
        return "My App";
    }
  };
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem routerLink="/home" routerDirection="none">
              <IonIcon slot="start" icon={homeOutline} />
              <IonLabel>Home</IonLabel>
            </IonItem>
            <IonItem routerLink="/about" routerDirection="none">
              <IonIcon slot="start" icon={informationCircleOutline} />
              <IonLabel>About</IonLabel>
            </IonItem>
            <IonItem routerLink="/display" routerDirection="none">
              <IonIcon slot="start" icon={callOutline} />
              <IonLabel>Display Settings</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonHeader id="main-content">
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>{getTitle()}</IonTitle>

          <ToggleDarkmode />
        </IonToolbar>
      </IonHeader>
    </>
  );
}
export default Sidebar;
