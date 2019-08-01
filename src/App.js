import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Card from "./Components/Card"


function App() {
  const [picture, setPicture] = useState();
  const [info, setInfo] = useState({});
  let failed = false;
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=ZDDAUYnXVNFAmOl4J1zFYoLKttoHZV6Yt0gZ3JTR&date=2015-09-07&")
      .then(res => {
        console.log(res);
        setPicture(res.data.hdurl);
        setInfo({
          copyright: res.data.copyright,
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
        <Card image={picture} info={info}/>
    </div>
  );
}

export default App;
