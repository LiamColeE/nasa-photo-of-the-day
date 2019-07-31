import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import ImageDisplay from "./Components/ImageDisplay";
import InfoDisplay from "./Components/InfoDisplay";


function App() {
  const [picture, setPicture] = useState();
  const [info, setInfo] = useState({});
  let failed = false;
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=ZDDAUYnXVNFAmOl4J1zFYoLKttoHZV6Yt0gZ3JTR")
      .then(res => {
        console.log(res);
        setPicture(res.data.hdurl);
        setInfo({ copyright: res.data.copyright,
                  title: res.data.title,
                  explanation: res.data.explanation

        })
      })
      .catch(error => {
        console.log(error);
        setPicture("false");
      })
  }, [])

  if (!picture) return <h3>Loading...</h3>;
  if (picture === "false") return <h3>The server said you cant have an image today</h3>;
  return (
    <div className="App">
      <p>
       <ImageDisplay image = { picture } />
       <InfoDisplay info={ info }/>
      </p>
    </div>
  );
}

export default App;
