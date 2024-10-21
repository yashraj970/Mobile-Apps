import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonImg,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getPhotoNews } from "../../../services/nagaNewsService";
import { environment } from "../../../environments/environment";

interface NewsItem {
  field_blog_image?: string;
  title: string;
  created: string;
  uuid: string;
}

const HomePhotoNews: React.FC = () => {
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const history = useHistory();

  useEffect(() => {
    getNewsList(0);
  }, []);

  const getNewsList = async (page: number) => {
    const data = await getPhotoNews(page);
    setNewsList(data.rows);
  };

  const loadMoreData = async (event: CustomEvent<void>) => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    const data = await getPhotoNews(nextPage);
    setNewsList([...newsList, ...data.rows]);
    (event.target as HTMLIonInfiniteScrollElement).complete();
  };

  const handleItemClick = (item: NewsItem, event: React.MouseEvent) => {
    event.stopPropagation();
    history.push(`/tabs/home/photo-news/${item.uuid}`);
  };

  return (
    <IonContent>
      <IonGrid className="ion-no-padding">
        <IonRow className="padding-half">
          {newsList.map((item, i) => (
            <IonCol
              key={i}
              className="padding-half"
              size="12"
              onClick={(e) => handleItemClick(item, e)}
            >
              <IonCard
                className="ion-no-margin ion-padding box-shadow background-secondary"
                hidden={!item.field_blog_image}
              >
                <IonCardHeader className="ion-no-padding ion-margin-bottom" />
                <IonImg
                  src={environment.baseurl + item.field_blog_image}
                  hidden={!item.field_blog_image}
                />
                <IonCardContent className="ion-no-padding">
                  <p className="text-size-xs text-color-primary font-regular custom-padding-bottom">
                    {item.title}
                  </p>
                  <span className="text-size-xs text-color-secondary font-regular">
                    {new Date(item.created).toLocaleDateString()}
                  </span>
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

export default HomePhotoNews;
