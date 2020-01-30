import React from 'react'
import PropTypes from 'prop-types'
import {
  Skeleton,
  SkeletonAvatar,
  SkeletonContainer,
  SkeletonContainerBars,
  SkeletonBar1,
  SkeletonBar2,
  SkeletonBar3,
  Container,
  RetakePicture,
} from "./styles";

export const SkeletonIdCard = ({ dataUri, isFullscreen }) => {
  const classNameFullscreen = isFullscreen ? 'demo-image-preview-fullscreen' : ''

  return (
    <Container>
        <Skeleton>
          <SkeletonContainer>
            <SkeletonAvatar />
            <SkeletonContainerBars>
              <SkeletonBar1 />
              <SkeletonBar2 />
              <SkeletonBar2 />
              <SkeletonBar3 />
            </SkeletonContainerBars>
          </SkeletonContainer>
        </Skeleton>
        <RetakePicture to="/cam">Take Picture</RetakePicture>  
        </Container>
  )
}

SkeletonIdCard.propTypes = {
  dataUri: PropTypes.string,
  isFullscreen: PropTypes.bool
}

export default SkeletonIdCard

