import axios from "axios";

export default function FetchData({query , setVideos}) {
  const apiKey = "AIzaSyBiRRoliElqnYKitt8bL3ME9-uHedM8l28";
  const dataURL = `https://www.googleapis.com/youtube/v3/search?q=${query}&maxResults=50&key=${apiKey}`;

  try {
    axios
      .get(dataURL)
      .then((response) => {
        console.log("Response =>  ",response);
        setVideos(response.data.items)
      })
      .catch((err) => {
        console.log("Error at try block of FetchData ", err.message);
      })
      .finally(() => {});
  } catch (error) {
    console.log("Error at FetchData", error.message);
  }
}
