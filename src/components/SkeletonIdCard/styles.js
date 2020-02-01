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

export const Container = styled.div`
  max-width: 265px;
  height: 160px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  border-radius: 20px;
`;
export const Skeleton = styled.div`
  width: 265px;
  height: 160px;
  -webkit-box-shadow: 0px 9px 22px 0px rgba(214, 214, 214, 0.75);
  -moz-box-shadow: 0px 9px 22px 0px rgba(214, 214, 214, 0.75);
  box-shadow: 0px 9px 22px 0px rgba(214, 214, 214, 0.75);
  border-radius: 25px;
  margin: auto;
`;
export const SkeletonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
export const SkeletonContainerBars = styled.div`
  width: 100%;
`;
export const SkeletonBar1 = styled.div`
  width: 126px;
  height: 10px;
  background: #f4f4f4;
  margin-top: 20px;
  margin-left: 20px;
  border-radius: 5px;
`;
export const SkeletonBar2 = styled.div`
  width: 86px;
  height: 10px;
  background: #f4f4f4;
  margin-top: 15px;
  margin-left: 20px;
  border-radius: 5px;
`;
export const SkeletonBar3 = styled.div`
  width: 126px;
  height: 10px;
  background: #f4f4f4;
  margin-top: 15px;
  margin-left: 20px;
  border-radius: 5px;
`;
export const SkeletonBar4 = styled.div`
  width: 75px;
  height: 10px;
  background: #f4f4f4;
  margin-top: 20px;
  margin-left: 20px;
  border-radius: 5px;
`;
export const SkeletonBar5 = styled.div`
  width: 100px;
  height: 10px;
  background: #f4f4f4;
  margin-top: 20px;
  margin-left: 20px;
  border-radius: 5px;
`;
export const SkeletonAvatar = styled.div`
  width: 105px;
  height: 85px;
  background: #f4f4f4;
  margin-top: 20px;
  margin-left: 20px;
`;

