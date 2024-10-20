import React, { useState, useRef } from "react";
import {
  IonContent,
  IonHeader,
  IonLabel,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
  IonPage,
} from "@ionic/react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
// import SwiperClass from "swiper/types/swiper-class";

import "swiper/css";
import "@ionic/react/css/ionic-swiper.css";

const TopTabs = () => {
  const [selectedTab, setSelectedTab] = useState<string>("home");
  const swiperRef = useRef<SwiperClass | null>(null);

  // Handle Segment Button change
  const handleSegmentChange = (value: string) => {
    setSelectedTab(value);
    if (value === "home") {
      swiperRef.current?.slideTo(0);
    } else if (value === "about") {
      swiperRef.current?.slideTo(1);
    }
  };

  // Handle Swiper Slide Change
  const handleSlideChange = (swiper: SwiperClass) => {
    if (swiper.activeIndex === 0) {
      setSelectedTab("home");
    } else if (swiper.activeIndex === 1) {
      setSelectedTab("about");
    }
  };

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonSegment
            value={selectedTab}
            onIonChange={(e) => handleSegmentChange(e.detail.value as string)}
          >
            <IonSegmentButton value="home">
              <IonLabel>Home</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="about">
              <IonLabel>About</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        {/* Swiper for swipeable views */}
        <Swiper
          onSwiper={(swiperInstance) => (swiperRef.current = swiperInstance)}
          onSlideChange={handleSlideChange}
          spaceBetween={50}
          slidesPerView={1}
        >
          {/* Tab 1 content */}
          <SwiperSlide>
            <div>
              <h2>Content for Home</h2>
              <p>This is the content for the Home tab.</p>
            </div>
          </SwiperSlide>

          {/* Tab 2 content */}
          <SwiperSlide>
            <div>
              <h2>Content for About</h2>
              <p>This is the content for the About tab.</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </IonContent>
    </>
  );
};

export default TopTabs;
