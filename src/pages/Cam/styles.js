import styled from "styled-components";
import { Link } from "@reach/router";
import { CircleCheck } from "../../components/icons/circle-check";

export const TakePhoto = styled.button`
  color: red;
  background: transparent;
  position: absolute;
  z-index: 3;
`;

export const CameraRealtime = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const CameraOverlay = styled.div`
  transition: all 300ms ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: transparent;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.5);
  pointer-events: none;
  z-index: 20;
  border-width: 226px 32px;
  &::after {
    content: "";
    right: -2px;
    bottom: -2px;
    position: absolute;
    border: solid 2px;
    border-color: ${props =>
      (props.status === "Accepted" && "#69cc8b") ||
      (props.status === "Rejected" && "#c00101")};
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 800;
  text-align: center;
  /* z-index: 3; */
  color: #FFF;
  width: 100%;
  /* padding-top: 30px; */
  position: absolute;
  z-index: 999;
  top: 110px;
`;
export const Paragraph = styled.p`
  font-size: 16px;
  text-align: center;
  line-height: 25px;
  color: #FFF;
  width: 100%;
  position: absolute;
  z-index: 999;
  top: 160px;
`;
export const CancelButton = styled(Link)`
  text-decoration: none !important;
  position: absolute;
  color: white;
  bottom: 10%;
  left: 50%;
    transform: translate3d(-50%, -50%, 0);
  font-size: 18px;
  text-align: center;
  z-index: 99999;
`;
export const PictureTaken = styled.div`
  z-index: 999;
  position: absolute;
  width: 100%;
  bottom: 20%;
  text-align: center;
  color: white;
`;
export const CheckIcon = styled(CircleCheck)`
  width: 12px;
  height: 12px;
  color: #69cc8b;
`;

export const Overlay = styled.div`
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  display: inline-block;
  position: absolute;
  z-index: 1;
  width: 290px;
  height: 180px;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 0px 999px rgba(0, 0, 0, 0.8);
    border-radius: 23px;
  }
  &::after {
    content: "";
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    position: absolute;
    background: transparent;
    border: solid 2px;
    border-color: ${props =>
      (props.status === "Accepted" && "#69cc8b") ||
      (props.status === "Rejected" && "#c00101")};
    width: 290px;
    height: 180px;
    border-radius: 25px;
  }
`;
