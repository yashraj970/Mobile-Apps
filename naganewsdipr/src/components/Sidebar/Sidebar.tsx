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
import { homeOutline, informationCircleOutline } from "ionicons/icons";
import { useLocation } from "react-router";
import ToggleDarkmode from "../Darkmode/ToggleDarkmode";
const menu = [
  { icon: homeOutline, name: "Home", url: "/home" },
  { icon: informationCircleOutline, name: "About DIPR", url: "/about-us" },
  { icon: "", name: "Naga News", url: "/tabs/home/news-list/naganews" },
  { icon: "", name: "Photo News", url: "/tabs/home/news-list/photonews" },
  { icon: "", name: "Video News", url: "/tabs/home/news-list/videonews" },
  { icon: "", name: "Publications", url: "/tabs/pdf-section" },
  { icon: "", name: "Advertisement", url: "/tabs/advertisement" },
  { icon: "", name: "Covid 19", url: "/tabs/covid-19" },
];
function Sidebar() {
  const location = useLocation();

  // Determine title based on current route
  const getTitle = () => {
    switch (location.pathname) {
      case "/about-us":
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
            <IonList>
              {menu.map((item, index) => (
                <IonItem
                  key={index}
                  routerLink={item.url}
                  routerDirection="none"
                >
                  {item.icon && <IonIcon slot="start" icon={item.icon} />}
                  <IonLabel>{item.name}</IonLabel>
                </IonItem>
              ))}
            </IonList>
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
