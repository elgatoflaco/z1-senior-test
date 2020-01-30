import styled from "styled-components";
import { Link } from "@reach/router";
export const RetakePicture = styled(Link)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 180px;
  height: 30px;
  background: rgb(45, 0, 121);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 16px;
  padding: 10px;
  font-weight: 600;
  color: #fff;
  border-radius: 50px;
  text-decoration: none !important;
`;

export const ContainerImagen = styled.div`
  max-width: 265px;
  height: 160px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  border: 2px solid #69cc8b;
  border-radius: 20px;
`;
export const LabelImagen = styled.span`
  position: absolute;
  bottom: -15px;
  right: 16px;
  width: 120px;
  height: 30px;
  background: ${props =>
    (props.status === "Accepted" && "#69cc8b") ||
    (props.status === "Rejected" && "#c00101")};
  /* background: #69cc8b; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  color: #fff;
  border-radius: 5px;
`;


export const Imagen = styled.img`
  max-width: 265px;
  height: 160px;
  border-radius: 18px;
`;
