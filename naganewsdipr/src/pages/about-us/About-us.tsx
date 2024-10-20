import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonPage,
  IonContent,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";

const About: React.FC = () => {
  return (
    <IonPage>
      {/* Header with Menu Button and Dark Mode Toggle */}
      <IonHeader>
        <IonToolbar className="background-secondary">
          <IonTitle>About DIPR</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* Main Content */}
      <IonContent>
        {/* First Card with Information */}
        <IonCard>
          <IonCardContent className="ion-text-wrap text-size-xs text-color-primary font-regular ion-padding-bottom ion-text-justify">
            The publicity branch of the Govt. was re-organised into a
            full-fledged Directorate in Aug. 1963, three months before Nagaland
            attained its statehood. Earlier known as Information & Publicity, it
            was renamed as Information & Public Relations in 1984 to give it a
            wider scope and greater area of functions. The Department is
            committed to the task of providing responsive, value-based
            information to the people and the media in its ultimate endeavor to
            serve the public; to establish favorable attitudes and responses to
            the government on the part of the general public or special groups;
            including analyses of attitudes, appraisal of procedures and
            policies, and presentation of the government’s purposes and
            objectives to the people.
          </IonCardContent>

          <IonCardContent className="ion-text-wrap text-size-xs text-color-primary font-regular ion-padding-bottom ion-text-justify">
            The activities of the department are centered on information
            relating to Govt. policies and development programs, thereby
            spreading awareness through various means of communication,
            including electronic media, print media, and films. It acts as the
            nodal agency of the Govt. to disseminate information to the Print
            and Electronic media. The Department is further dedicated to the
            cause of better understanding between the government and the people,
            and between the government and the media—translating into reality
            the theory of accountability and transparency, an essential
            criterion of good governance.
          </IonCardContent>
        </IonCard>

        {/* Second Card with Contact Information */}
        <IonCard>
          {/* Office Address */}
          <IonCardHeader>
            <IonCardTitle
              className="ion-text-wrap text-size-xs text-color-primary font-regular ion-padding-bottom ion-text-justify"
              style={{ paddingBottom: "0px" }}
            >
              OFFICE ADDRESS
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent className="ion-text-wrap text-size-xs text-color-primary font-regular ion-padding-bottom ion-text-justify">
            Directorate of Information & Public Relations, DIPR Citadel, New
            Capital Complex, Kohima Nagaland 797001
          </IonCardContent>

          <div
            style={{ width: "100%", borderBottom: "1px solid #b2b2b2" }}
          ></div>

          {/* Email Address */}
          <IonCardHeader>
            <IonCardTitle
              className="ion-text-wrap text-size-xs text-color-primary font-regular ion-padding-bottom ion-text-justify"
              style={{ paddingBottom: "0px" }}
            >
              EMAIL ADDRESS
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent className="ion-text-wrap text-size-xs text-color-primary font-regular ion-padding-bottom">
            Correspondence - iprnagaland@gmail.com <br />
            News - diprnaganews@yahoo.com <br />
            Advertisement - dipradvert@gmail.com
          </IonCardContent>

          <div
            style={{ width: "100%", borderBottom: "1px solid #b2b2b2" }}
          ></div>

          {/* Phone Number */}
          <IonCardHeader>
            <IonCardTitle
              className="ion-text-wrap text-size-xs text-color-primary font-regular ion-padding-bottom ion-text-justify"
              style={{ paddingBottom: "0px" }}
            >
              PHONE NUMBER
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent className="ion-text-wrap text-size-xs text-color-primary font-regular ion-padding-bottom ion-text-justify">
            Telephone (0370) 2271492 (O)
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default About;
