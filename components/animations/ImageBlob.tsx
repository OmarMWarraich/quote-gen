import React from 'react'
import Image from 'next/image'

interface ImageBlobProps {
  quoteReceived: String | null;
  blobUrl: string | null;
}

const ImageBlob = ({blobUrl, quoteReceived}:ImageBlobProps ) => {
  return (
    <div>ImageBlob</div>
  )
}

export default ImageBlob