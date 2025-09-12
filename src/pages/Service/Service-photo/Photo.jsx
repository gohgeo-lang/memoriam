import { useState, useRef } from "react";
import "./Photo.css"; // 별도 CSS 파일 불러오기

function Photo() {
  const [petImage, setPetImage] = useState(null);
  const [template, setTemplate] = useState("/templates/template1.png");
  const canvasRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPetImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const drawCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const petImg = new Image();
    const tplImg = new Image();

    petImg.src = petImage;
    tplImg.src = template;

    petImg.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 반려동물 사진
      ctx.drawImage(petImg, 50, 100, 400, 400);

      // 템플릿
      tplImg.onload = () => {
        ctx.drawImage(tplImg, 0, 0, canvas.width, canvas.height);
      };
    };
  };

  const downloadImage = () => {
    const link = document.createElement("a");
    link.download = "memorial_photo.png";
    link.href = canvasRef.current.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="photo-container">
      <h2 className="photo-title">반려동물 영정사진 제작</h2>

      <input type="file" accept="image/*" onChange={handleImageUpload} />

      <div className="template-buttons">
        <button onClick={() => setTemplate("/templates/template1.png")}>
          템플릿1
        </button>
        <button onClick={() => setTemplate("/templates/template2.png")}>
          템플릿2
        </button>
      </div>

      <canvas
        ref={canvasRef}
        width={500}
        height={600}
        className="photo-canvas"
      />

      <div className="action-buttons">
        <button onClick={drawCanvas}>합성하기</button>
        <button onClick={downloadImage}>다운로드</button>
      </div>
    </div>
  );
}

export default Photo;
