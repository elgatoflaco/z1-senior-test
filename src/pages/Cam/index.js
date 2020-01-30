import React, { useState, useInterval, useEffect } from "react";
import Webcam from "react-webcam";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { navigate } from "@reach/router";
import {
  CameraRealtime,
  CameraOverlay,
  TakePhoto,
  CancelButton,
  PictureTaken,
  CheckIcon
} from "./styles";
import { cropImage } from "../../helpers";
const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
  // Cámara trasera (Móviles).
  // facingMode: { exact: 'environment' }
};

function onUserMedia(params) {
  console.log("hola");
}
function CamPage(props) {
  const webcamRef = React.useRef(null);
  const [stopInterval, setStopInterval] = useState(true);
  const [idCard, setIdCard] = useLocalStorage("idcard", false);
  const [status, setStatus] = useLocalStorage("status", false);
  const [original, setOriginal] = useLocalStorage("idcard-original", false);

  useEffect(() => {
    if (stopInterval) {
      const interval = setInterval(() => {
        console.log("Take a screenshot");
        capture();
      }, 2000);
      return () => clearInterval(interval);
    }
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const validatePhoto = async (imageSrc, cb) => {
      await window
        .fetch("https://front-exercise.z1.digital/evaluations", {
          method: "POST"
        })
        .then(res => res.json())
        .then(response => {
          cropImage(imageSrc, url => {
            setOriginal(url);
            setIdCard(url);
          });
          if (response.summary.outcome === "Approved") {
            setStopInterval(false);
            setStatus("Accepted");
            setTimeout(() => {
              navigate(`/`)
            }, 3000);
            console.log("Accepted");
          } else {
            setStatus("Rejected");
            console.log("Rejected");
          }
        })
        .catch(error => console.log(error));
  };

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    validatePhoto(imageSrc);
  }, [validatePhoto]);

  function handleClick() {
    setStopInterval(false);
  }
  return (
    <>
      <div className="">
        <div className="">
          <div id="camera" className="Camera">
            <CameraRealtime>
              <Webcam
                height={100 + "%"}
                width={100 + "%"}
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                onUserMedia={onUserMedia()}
                videoConstraints={videoConstraints}
              />
            </CameraRealtime>
            <CameraOverlay status={status} />
            { !stopInterval ? <PictureTaken><CheckIcon/> {" "}Picture Taken</PictureTaken>: null}
            <TakePhoto onClick={capture}>Capture photo</TakePhoto>
            <CancelButton to="/" onClick={e => handleClick(e)}>
              Cancel
            </CancelButton>
            <canvas id="canvas" style={{ display: "none" }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default CamPage;
