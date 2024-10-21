import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonIcon,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { logoYoutube } from "ionicons/icons";
import { getVideoNews } from "../../../services/nagaNewsService";

interface NewsItem {
  field_video_embed?: string;
  title: string;
  created: string;
  uuid: string;
}

const HomeVideoNews: React.FC = () => {
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    getNewsList(0);
  }, []);

  const getNewsList = async (page: number) => {
    const data = await getVideoNews(page);
    setNewsList(data.rows);
  };

  const loadMoreData = async (event: CustomEvent<void>) => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    const data = await getVideoNews(nextPage);
    setNewsList([...newsList, ...data.rows]);
    (event.target as HTMLIonInfiniteScrollElement).complete();
  };

  const handleItemClick = (item: NewsItem, event: React.MouseEvent) => {
    event.stopPropagation();
    window.open(item.field_video_embed, "_system");
  };

  const getImage = (url: string) => {
    const id = url.match(/[\w\-]{11,}/)?.[0];
    return `http://img.youtube.com/vi/${id}/0.jpg`;
  };

  return (
    <IonContent>
      <IonGrid className="ion-no-padding">
        <IonRow className="padding-half">
          {newsList.map((item, i) => (
            <IonCol
              key={i}
              size="12"
              sizeMd="4"
              className="padding-half"
              onClick={(e) => handleItemClick(item, e)}
            >
              <IonCard className="ion-no-margin ion-padding box-shadow background-secondary">
                <IonCardHeader className="ion-no-padding ion-margin-bottom" />
                <div className="play">
                  <img
                    className="border-radius"
                    width="100%"
                    height="100%"
                    src={getImage(item.field_video_embed!)}
                    alt="YouTube Thumbnail"
                  />
                  <IonIcon icon={logoYoutube} className="logo-youtube" />
                </div>
                <IonCardContent className="ion-no-padding">
                  <h2 className="text-size-md text-color-primary font-regular">
                    {item.title}
                  </h2>
                  <h3 className="text-size-sm text-color-secondary font-regular padding-half-top">
                    {new Date(item.created).toLocaleDateString()}
                  </h3>
                </IonCardContent>
              </IonCard>
            </IonCol>
          ))}
          <IonCol size="12" className="ion-padding-top">
            <IonInfiniteScroll threshold="100px" onIonInfinite={loadMoreData}>
              <IonInfiniteScrollContent
                loadingSpinner="bubbles"
                loadingText="Loading more data..."
              />
            </IonInfiniteScroll>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default HomeVideoNews;
