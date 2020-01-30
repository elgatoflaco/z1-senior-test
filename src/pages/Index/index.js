import React, { useState, useInterval, useEffect } from "react";

import { useLocalStorage } from "../../hooks/useLocalStorage";
import SkeletonIdCard from '../../components/SkeletonIdCard'
import ImagePreview from '../../components/ImagePreview'
import {
  Container,
  Header,
  Title,
  Logo,
  Paragraph
} from "./styles";

function IndexPage(props) {
  const [idCard, setIdCard] = useLocalStorage("idcard", false);
  const [status, setStatus] = useLocalStorage("status", false);

  return (
    <>
      <Container>
        <Header>
          <Logo>Bank Client</Logo>
        </Header>
        <Title>Scan your ID</Title>

        <Paragraph>
          Take a picture. It may take time to validate
          <br /> your personal information.
        </Paragraph>
        {status === false ? <SkeletonIdCard/> : <ImagePreview imgSrc={idCard} status={status}/> }
        
        
        
        
        {/* <Imagen src={original} /> */}
      </Container>
    </>
  );
}

export default IndexPage;
