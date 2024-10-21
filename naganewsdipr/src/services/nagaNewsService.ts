import axios from "axios";
import { environment } from "../environments/environment";

const nagaNewBaseUrl = environment.baseurl; // Ensure you have your environment variable set

const getNagaNews = async (pageno: number) => {
  try {
    const response = await axios.get(
      `${nagaNewBaseUrl}/api/v1/naga-news?page=${pageno}`,
      {
        headers: {
          accept: "*/*",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("API ERROR", error);
    throw error;
  }
};

const getPhotoNews = async (pageno: number) => {
  try {
    const response = await axios.get(
      `${nagaNewBaseUrl}/api/v1/photo-news?page=${pageno}`,
      {
        headers: {
          accept: "*/*",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("API ERROR", error);
    throw error;
  }
};

const getVideoNews = async (pageno: number) => {
  try {
    const response = await axios.get(
      `${nagaNewBaseUrl}/api/v1/video-news?page=${pageno}`,
      {
        headers: {
          accept: "*/*",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("API ERROR", error);
    throw error;
  }
};

const getIndividualNews = async (uuid: string) => {
  try {
    const response = await axios.get(
      `${nagaNewBaseUrl}/jsonapi/node/blog_post/${uuid}?include=field_blog_image`,
      {
        headers: {
          accept: "*/*",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("API ERROR", error);
    throw error;
  }
};

// Export the services
export { getNagaNews, getPhotoNews, getVideoNews, getIndividualNews };
