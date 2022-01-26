import React, { useCallback, useRef } from 'react';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import download from "downloadjs";
import ImageFile from "./content";


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
      <button onClick={onButtonClick}>Download as JPEG</button>
    </>
    
  );
}