import { useState, useRef } from "react";

function App() {
  const inputRef = useRef();
  const [videos, setVideos] = useState([]);

  const handleFormData =  () => {
    let text = inputRef.current.value;
    // console.log(data)
    if(text === ""){
      alert("Query Is Null, Please Put Prompt into Input Feild")
    } else {
      fetchData(text)
    }
  };

  const fetchData = async (query) => {
    try {
      if(query === '') {
        throw new Error("Query Is null At API Calling Place")
      }
      const apiKey = "AIzaSyC7tye0fnfiFMa31SCrMJJksp_8zFbd8HI";
      let dataUrl = `https://www.googleapis.com/youtube/v3/search?q=${query}&key=${apiKey}`;
      const response = await fetch(dataUrl);
      let data = await response.json();
      console.log(data);
      setVideos(data);
    } catch (error) {
      alert("Query Is Null")
      console.log("Error ", error);
    }
  };

  return (
    <>
      <div className="w-screen h-[300px] border flex justify-center items-center">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            handleFormData();
          }}
          className="w-full flex justify-center "
        >
          <input
          autoFocus
            className="outline-none border-none rounded-sm bg-gray-600 px-2 py-1 w-[50%]"
            type="text"
            ref={inputRef}
            placeholder="Enter Movie Name"
          />
          <button className="bg-blue-700 px-2 py-1 rounded-sm" type="submit">
            Search
          </button>
        </form>
      </div>

      <div className="flex flex-wrap justify-between gap-y-5  p-2">
        {videos.items
          ? videos.items.map((index) => {
              let videoId = index.id.videoId;
              let url = `https://www.youtube.com/embed/${videoId}`;
              return (
                <iframe
                  className="border px-2 py-3 rounded-md w-[47%] h-[250px]"
                  allowFullScreen
                  key={Math.random()}
                  src={url}
                ></iframe>
              );
            })
          : ""}
      </div>
  {/* 
        <button onClick={fetchData} className="border p-2">
          fetch data
        </button> */}
    </>
  );
}

export default App;
