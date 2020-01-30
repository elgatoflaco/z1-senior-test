import styled from "styled-components";
import { Link } from "@reach/router";

export const Container = styled.div`
  max-width: 600px;
  height: 100vh;
  margin: auto;
  border: 1px solid #ccc;
`;
export const Header = styled.div`
  height: 40px;
  border-bottom: 1px solid #eae4f1;
  padding: 5px 20px;
`;
export const Logo = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: rgb(46, 0, 121);
  font-style: italic;
`;


export const Title = styled.h1`
  font-size: 20px;
  font-weight: 800;
  text-align: center;
  /* z-index: 3; */
  color: #000;
  width: 100%;
  padding-top: 30px;
`;
export const Paragraph = styled.p`
  font-size: 16px;
  text-align: center;
  line-height: 25px;
  color: #000;
  width: 100%;
`;
