import { useState, useRef, useEffect } from "react";
import FetchData from "./FetchData";



function App() {
  const inputRef = useRef();
  const [videos, setVideos] = useState([]);

  const handleFormData = () => {
    let query = inputRef.current.value;

    if (query === "") {
      alert("Query Is Null, Please Put Prompt into Input Feild");
    } else {
      FetchData({query , setVideos});
    }

  };

  useEffect(()=>{
    console.log("videos => " , videos)
  } , [videos])

 
  return (
    <>
      <div className="w-screen h-fit py-10 border-b-2 flex justify-center items-center">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            handleFormData();
          }}
          className="w-full flex justify-center px-1"
        >
          <input
            autoFocus
            className="outline-none border-none rounded-sm bg-gray-600 px-2 py-1  sm:w-[50%] w-[100%]"
            type="text"
            ref={inputRef}
            placeholder="Enter Movie Name"
          />
          <button className="bg-blue-700 px-2 py-1 rounded-sm" type="submit">
            Search
          </button>
        </form>
      </div>

      <div className="flex flex-col sm:flex-row w-full flex-wrap justify-center items-center gap-y-5 sm:gap-x-5  p-2">
        {videos
          ? videos.map((index) => {
              let videoId = index.id.videoId;
              let url = `https://www.youtube.com/embed/${videoId}`;
              return (
                <iframe
                  className="border px-2 py-3 rounded-md w-full sm:w-[30%] h-[380px]"
                  allowFullScreen
                  key={index}
                  onClick={() => showVideoInFullScreen(index)}
                  src={url}
                ></iframe>
              );
            })
          : ""}
      </div>
      
      <div>
        {/* <iframe src="#"></iframe> */}
      </div>

    </>
  );
}

export default App;
