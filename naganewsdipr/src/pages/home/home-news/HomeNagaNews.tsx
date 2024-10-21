import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonButton,
} from "@ionic/react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getNagaNews } from "../../../services/nagaNewsService"; // Importing the service

interface NewsItem {
  title: string;
  body: string;
  created: string;
}

const HomeNagaNews: React.FC = () => {
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const history = useHistory();

  useEffect(() => {
    fetchNews(0);
  }, []);

  const fetchNews = async (page: number) => {
    try {
      const data = await getNagaNews(page);
      setNewsList(data.rows);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  const loadMoreData = async (event: CustomEvent<void>) => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    try {
      const data = await getNagaNews(nextPage); // Fetch more data
      setNewsList([...newsList, ...data.rows]); // Append new data to the existing list
      (event.target as HTMLIonInfiniteScrollElement).complete(); // Complete infinite scroll
    } catch (error) {
      console.error("Error loading more data:", error);
      (event.target as HTMLIonInfiniteScrollElement).complete();
    }
  };

  const handleItemClick = (item: NewsItem, event: React.MouseEvent) => {
    event.stopPropagation();
    history.push(`/news-detail/${item.title}`); // Navigate to a detail page
  };

  return (
    <IonContent>
      <IonGrid className="ion-no-padding">
        <IonRow className="padding-half">
          {newsList.map((item, i) => (
            <IonCol
              className="padding-half"
              size="12"
              key={i}
              onClick={(e) => handleItemClick(item, e)}
            >
              <IonItem className="box-shadow border-radius" lines="none">
                <IonLabel>
                  <h5 className="ion-text-wrap text-size-xs text-color-primary font-regular ion-padding-bottom">
                    {item.title}
                  </h5>
                  <h6 className="ion-text-wrap text-size-sm text-color-primary font-regular ion-padding-bottom">
                    {item.body.slice(0, 100)}
                  </h6>
                  <IonButton color="dark">
                    {new Date(item.created).toLocaleDateString()}
                  </IonButton>
                </IonLabel>
              </IonItem>
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

export default HomeNagaNews;
