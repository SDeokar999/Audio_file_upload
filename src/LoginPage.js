import React, { useEffect, useState, useRef } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";


const LoginPage = () => {
  const [audio, setAudio] = useState([])
  const [name, setName] = useState({});
  const [buttons, setButtons] = useState(true);
  const [values, setValues] = useState('a');
  const [valuesPass, setValuesPass] = useState();

  let matched = false;
  const myRef = useRef();
  const onChanges = (e) => {
    const x = URL.createObjectURL(e.target.files[0])
    setAudio([...audio, { name: e.target.files[0].name, file: x }])
    localStorage.setItem('audio', JSON.stringify([...audio, { name: e.target.files[0].name, file: x }]))
  }

  useEffect(() => {
    if (!audio.length && localStorage.audio) {
      let audioFiles = JSON.parse(localStorage.audio);
      let newAudioFiles = audioFiles.map((file) => {
        return {
          ...file,
          file: new Audio(file.file)
        }
      })
      setAudio(newAudioFiles)
    }
    console.log(localStorage.getItem('audio'))
  }, [])

  const passwords = (e) => {
    setValuesPass(e.target.value)
    console.log(valuesPass)
  }
  const userNames = (e) => {
    setValues(e.target.value)
    console.log(values)
  }
  const submitted = () => {
    return ((values == valuesPass) ? matched = true : matched = false)
  }


  return <div style={{ paddingLeft: "400px", justifyContent: "center", display: "flex", paddingTop: "100px", color: "white" }}>
    <div>
      <div style={{ paddingBottom: "50px", borderBottom: "1px solid white", justifyContent: "center", display: "flex", padding: "10px", fontSize: "25px" }}>Login to upload audio files and enjoy the music</div>
      <div style={{ padding: "30px", borderTop: "2px solid white" }}>
        <div style={{ justifyContent: "center", display: "flex", color: "white" }}> <TextField
          inputProps={{ style: { color: "white" } }}
          label="Username"
          variant="standard"
          color="warning"
          focused
          onBlur={(e) => userNames(e)}
        /></div>

        <br />
        <div style={{ justifyContent: "center", display: "flex" }}> <TextField
          inputProps={{ style: { color: "white" } }}
          label="Password"
          variant="standard"
          color="warning"
          focused
          onBlur={(e) => passwords(e)}
        /></div>
        <div style={{ justifyContent: "center", display: "flex", marginTop: "20px" }}>
          <Link to={"/home"}><Button variant="outlined" onClick={submitted} style={{ color: "white" }}>Login</Button></Link></div>
        {(matched) ? <div>Login successfully</div> : null}
      </div>
    </div>
  </div>
}
export default LoginPage;