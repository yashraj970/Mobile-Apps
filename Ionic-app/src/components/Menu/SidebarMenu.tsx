import React, { useEffect, useState } from "react";
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
  IonToggle,
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
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Check if dark mode was saved in localStorage
  useEffect(() => {
    const isDark = window.localStorage.getItem("darkMode") === "true";
    setDarkMode(isDark);
    if (isDark) {
      document.body.classList.add("light-theme");
    }
  }, []);

  // Toggle dark mode and update class on body
  const toggleDarkMode = (e: CustomEvent) => {
    setDarkMode(e.detail.checked);
    if (e.detail.checked) {
      document.body.classList.add("light-theme");
      window.localStorage.setItem("darkMode", "true");
    } else {
      document.body.classList.remove("light-theme");
      window.localStorage.setItem("darkMode", "false");
    }
  };

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
