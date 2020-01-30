import React from "react";
import PropTypes from "prop-types";
import { ContainerImagen, Imagen, LabelImagen, RetakePicture } from "./styles";

export const ImagePreview = ({ imgSrc, status }) => {
  return (
    <ContainerImagen>
      <Imagen src={imgSrc} width="265" height="160" />
      <LabelImagen status={status}>
        {status === "Accepted" ? <>√</> : <>x</>}
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
