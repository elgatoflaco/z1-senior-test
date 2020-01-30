import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const ImagePreview = ({ dataUri, isFullscreen }) => {
  const classNameFullscreen = isFullscreen ? 'demo-image-preview-fullscreen' : ''

  return (
    <Container className={'demo-image-preview ' + classNameFullscreen}>
      <Image src={dataUri} />
    </Container>
  )
}

ImagePreview.propTypes = {
  dataUri: PropTypes.string,
  isFullscreen: PropTypes.bool
}

export default ImagePreview

const Container = styled.div`
position: relative;
    text-align: center;
`
const Image = styled.img`
width: 768px;
@media (max-width: 768px) {
    width: 100%;
  }
`
