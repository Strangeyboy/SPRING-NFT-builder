import React, { useCallback, useRef } from 'react';
import { Card } from "./card";
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import download from "downloadjs";
import ImageFile from "./image";

export function Export() {

  const onButtonClick = () => {
    var domElement = document.getElementById('export');
    htmlToImage.toJpeg(domElement)
      .then(function (dataUrl) {
        console.log(dataUrl);
        download(dataUrl, 'image.jpeg');
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
  };
  return (
    <>
      <ImageFile />
      <div 
        style={{
          display: "block"
        }}
        id="my-node"
        >
          <button onClick={onButtonClick}>Download as JPEG</button>
      </div>
    </>
    
  );
}