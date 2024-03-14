const API_KEY = "AIzaSyC7tye0fnfiFMa31SCrMJJksp_8zFbd8HI";
const query = "KGF";

const url = `https://www.googleapis.com/youtube/v3/search?q=${query}&key=${API_KEY}`;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    const videoId = data.items[0].id.videoId;

    const iframe = document.querySelector("#manas-iframe");

    // Create the iframe element
    // const iframe = document.createElement("iframe");
    // iframe.width = "560";
    // iframe.height = "315";
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    // iframe.frameborder = "0";
    // iframe.allowfullscreen = true;

    // Append the iframe to the container div
    // const videoContainer = document.getElementById("video-container");
    // videoContainer.appendChild(iframe);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
