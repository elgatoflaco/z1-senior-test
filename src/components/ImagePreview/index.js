import React from "react";
import PropTypes from "prop-types";
import { ContainerImagen, Imagen, LabelImagen, RetakePicture, CheckIcon, TimesIcon } from "./styles";


export const ImagePreview = ({ imgSrc, status }) => {
  return (
    <ContainerImagen>
      <Imagen src={imgSrc} width="265" height="160" />
      <LabelImagen status={status}>
        {status === "Accepted" ? <CheckIcon/> : <TimesIcon/>}
        {status}
      </LabelImagen>
      {status !== "Accepted" ? (
        <RetakePicture to="/cam">Retake Picture</RetakePicture>
      ) : null}
    </ContainerImagen>
  );
};

ImagePreview.propTypes = {
  imgSrc: PropTypes.string,
  status: PropTypes.string
};

export default ImagePreview;
