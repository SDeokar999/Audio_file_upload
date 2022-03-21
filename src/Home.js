import React, { useEffect, useState } from 'react';
import Audio from './Audio';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const Home = () => {
  const [audio, setAudio] = useState([])
  const onChanges = (e) => {
    const x = URL.createObjectURL(e.target.files[0])
    setAudio([...audio, { name: e.target.files[0].name, file: x }])
    localStorage.setItem('audio', JSON.stringify([...audio, { name: e.target.files[0].name, file: x }]))
  }

  useEffect(() => {
    if (!audio.length && localStorage.audio) {
      let audioFiles = JSON.parse(localStorage.audio);
      setAudio(audioFiles)
    }

  }, [])


  return <><Link to={"/"}><Button style={{ float: "right", color: "white", margin: "10px", border: "1px solid white" }} >Logout</Button></Link>
    <div style={{ paddingLeft: "400px", justifyContent: "center", display: "flex", paddingTop: "100px" }}>
      <div>
        <div style={{ paddingBottom: "50px", borderBottom: "1px solid white", justifyContent: "center", display: "flex", padding: "10px", fontSize: "25px" }}>Upload audio file and enjoy the music</div>
        <div style={{ padding: "30px", borderTop: "3px solid white", borderBottom: "1px solid white", paddingLeft: "180px" }}>
          <input type="file" onChange={(e) => onChanges(e)} />
        </div>
        {audio.map((data) => {
          return (
            <>
              <Audio data={data} />
            </>)
        })
        }
      </div>
    </div>
  </>
}
export default Home;  