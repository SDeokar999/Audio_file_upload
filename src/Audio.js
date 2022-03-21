import React, { useEffect, useState, useRef } from 'react';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';


const Audio = ({ data }) => {
  const [buttons, setButtons] = useState(true);
  const [name, setName] = useState({});
  const myRef = useRef();
  const play = (audio) => {
    if (audio) {
      myRef.current.play()
      setButtons(false)

    }
  }
  const pause = (audio) => {
    if (audio) {
      myRef.current.pause()
      setButtons(true)
    }

  }
  return (
    <>
      <div style={{ padding: "15px", paddingLeft: "80px", borderBottom: "1px solid white", display: "flex" }}>
        <audio
          ref={myRef}
          src={data.file}
        />
        {(buttons) ? <PlayCircleOutlineIcon fontSize="large" onClick={() => play(data.file)} /> : <PauseCircleOutlineIcon fontSize="large" onClick={() => pause(data.file)} />
        }
        <div style={{ marginLeft: "20px", alignSelf: "center" }}>{data.name}</div>

      </div>
    </>
  )
}

export default Audio;