import React, { useCallback, useEffect, useRef, useState } from "react";
import "./compCanvas.css";
import imgPlaceholder from "./fallbackImg.svg";
import upldIcon from "./uploadIcon.svg";

var factory = require("./cullenWASM.js");

export const CompressionCanvas = () => {
  const imageRef = useRef();
  const canvasRef = useRef();
  const compressFn = useRef();
  const [imgLoaded, setImgLoaded] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    factory().then((instance) => {
      compressFn.current = instance._compress_img;
      setReady(true);
    });
    return () => {
      setReady(false);
    };
  }, [setReady]);

  const compressImage = useCallback(() => {
    const threshold = document.getElementById("compression-threshold")?.value;
    if (imgLoaded && threshold && ready) {
      compressFn.current(threshold / 5);
      setReady(false);
    }
  }, [imgLoaded, ready]);

  const drawImage = useCallback((canvas, src) => {
    const img = new Image();
    const ctx = canvas.getContext("2d");
    img.onload = () => {
      const wRatio = canvas.width / img.width;
      const hRatio = canvas.height / img.height;

      const ratio = Math.min(wRatio, hRatio);
      const wShift = (canvas.width - img.width * ratio) / 2;
      const hShift = (canvas.height - img.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        wShift,
        hShift,
        img.width * ratio,
        img.height * ratio,
      );
    };
    img.src = src;
  }, []);

  const initCanvas = useCallback(
    (canvas) => {
      if (canvas) {
        canvasRef.current = canvas;
        if (!imgLoaded) drawImage(canvas, imgPlaceholder);
      }
    },
    [imgLoaded, drawImage],
  );

  const onImageInput = useCallback(
    (event) => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (event.target.files && event.target.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setReady(true);
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          drawImage(canvas, e.target.result);
          setImgLoaded(true);
        };
        reader.readAsDataURL(event.target.files[0]);
      }
    },
    [setImgLoaded, drawImage],
  );

  const onCanvasClick = useCallback(() => {
    const fileInput = document.getElementById("cullen-img-file-input");
    if (fileInput) fileInput.click();
  }, []);

  const updateLabel = useCallback((inpt) => {
    const label = document.getElementById("thresh-value");
    if (label && inpt) {
      label.innerText = inpt.value + "%";
    }
  }, []);

  return (
    <div className="comp-wrapper">
      <div className="__cntls-can">
        <div className="__thresh-cn">
          <p>Threshold</p>
          <p id="thresh-value" />
          <input
            id="compression-threshold"
            type="range"
            min={0}
            max={100}
            defaultValue={75}
            ref={updateLabel}
            onChange={(e) => updateLabel(e.target)}
          />
        </div>
        <button onClick={compressImage} disabled={!imgLoaded || !ready}>
          Compress
        </button>
      </div>
      <input
        id="cullen-img-file-input"
        type="file"
        onChange={onImageInput}
        ref={imageRef}
        hidden
      />
      <div className="canvas-wrapper">
        <canvas
          id="compression_canvas"
          ref={initCanvas}
          width={400}
          height={400}
        />
        <button className="cln-can-input-btn" onClick={onCanvasClick}>
          <img src={upldIcon} alt="Upload Button" />
        </button>
      </div>
    </div>
  );
};
