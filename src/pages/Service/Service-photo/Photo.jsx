import { useState } from "react";
import "./Photo.css";
import PreviewCanvas from "../../../components/PreviewCanvas";

export default function Photo() {
  const [activeStep, setActiveStep] = useState(1);
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("");

  //Step3 변수
  const [previewImage, setPreviewImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTemplateClick = (tpl) => {
    setLoading(true);
    setPreviewImage(null);

    setTimeout(() => {
      setPreviewImage(tpl.result);
      setLoading(false);
    }, 5000);
  };

  const templates = [
    {
      id: 1,
      name: "정장1",
      icon: "/img/suit-icon.png",
      result: "/img/result-suit.png",
    },
  ];

  //Step4 변수
  const [background, setBackground] = useState("#ffffff");
  const backgrounds = [
    { id: 1, name: "화이트", color: "#ffffff" },
    { id: 2, name: "그레이", color: "#e0e0e0" },
    { id: 3, name: "브라운", color: "#7b5449" },
    { id: 4, name: "그린", color: "#80bc85ff" },
    { id: 5, name: "스카이", color: "#65b3f3ff" },
    { id: 6, name: "옐로우", color: "#ffdb4bff" },
    { id: 7, name: "핑크", color: "#ff6cb8ff" },
    { id: 8, name: "베이지", color: "#decf9cff" },
    { id: 9, name: "블랙", color: "#000000ff" },
    { id: 10, name: "레드", color: "#b63030ff" },
  ];
  //Step5 변수
  const [brightness, setBrightness] = useState(0);
  const [contrast, setContrast] = useState(0);
  const [saturation, setSaturation] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const [sharpness, setSharpness] = useState(0);

  //Step6 변수
  const [currentPreset, setCurrentPreset] = useState("default");

  const applyPreset = (preset) => {
    setCurrentPreset(preset.type);

    switch (preset.type) {
      case "grayscale":
        setBackground("#888888");
        break;
      case "sepia":
        setBackground("#704214");
        break;
      case "noise":
        setBackground("#999999");
        break;
      default:
        break;
    }
  };

  const presets = [
    { id: 1, name: "기본", type: "default" },
    { id: 2, name: "흑백", type: "grayscale" },
    { id: 3, name: "세피아", type: "sepia" },
    { id: 4, name: "필름노이즈", type: "noise" },
  ];

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setFileName(file.name);
    }
  };

  return (
    <div className="sideBar mt-20">
      <div className="sideBar-nav">
        <ul>
          <li onClick={() => setActiveStep(1)}>
            <i className="bi bi-image"></i>
          </li>

          <li onClick={() => setActiveStep(2)}>
            <i className="bi bi-brush"></i>
          </li>
          <li onClick={() => setActiveStep(3)}>
            <i className="bi bi-person-square"></i>
          </li>
          <li onClick={() => setActiveStep(4)}>
            <i className="bi bi-palette"></i>
          </li>
          <li onClick={() => setActiveStep(5)}>
            <i className="bi bi-sliders"></i>
          </li>
          <li onClick={() => setActiveStep(6)}>
            <i className="bi bi-stars"></i>
          </li>
          <li onClick={() => setActiveStep(7)}>
            <i className="bi bi-upload"></i>
          </li>
        </ul>
      </div>
      <div className="sideBar-detail">
        {activeStep === 1 && (
          <div className="activeStep-one">
            <h2>우리아이 사진</h2>
            <input type="file" accept="image/*" onChange={handleUpload} />
            {image && (
              <div className="uploaded-preview">
                <img src={image} alt="업로드한 사진" />
              </div>
            )}
            <ul>
              <p>첨부이미지 가이드</p>
              <li>피사체는 클수록 좋아요.</li>
              <li>정면일 때 인식률이 높아요.</li>
              <li>피사체 이외의 것은 적을수록 좋아요.</li>
            </ul>
          </div>
        )}

        {activeStep === 2 && (
          <div>
            <h2>빠른 제작</h2>
          </div>
        )}

        {activeStep === 3 && (
          <div className="activeStep-three">
            <h2>디자인템플릿</h2>
            <div className="template-cards">
              {templates.map((tpl) => (
                <div
                  key={tpl.id}
                  className="template-card"
                  onClick={() => handleTemplateClick(tpl)}
                >
                  <img src={tpl.icon} alt={tpl.name} />
                  <p>{tpl.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeStep === 4 && (
          <div className="activeStep-four">
            <h2>배경설정</h2>
            <div className="background-cards">
              {backgrounds.map((bg) => (
                <div
                  key={bg.id}
                  className="background-card"
                  style={{ backgroundColor: bg.color }}
                  onClick={() => setBackground(bg.color)}
                >
                  <p>{bg.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeStep === 5 && (
          <div className="activeStep-five">
            <h2>사진보정</h2>
            <label>
              대비:
              <input
                type="range"
                min="-100"
                max="100"
                value={contrast}
                onChange={(e) => setContrast(Number(e.target.value))}
              />
              <span>{contrast}</span>
            </label>
            <label>
              밝기:
              <input
                type="range"
                min="-100"
                max="100"
                value={brightness}
                onChange={(e) => setBrightness(Number(e.target.value))}
              />
              <span>{brightness}</span>
            </label>
            <label>
              채도:
              <input
                type="range"
                min="-100"
                max="100"
                value={saturation}
                onChange={(e) => setSaturation(Number(e.target.value))}
              />
              <span>{saturation}</span>
            </label>
            <label>
              색온도:
              <input
                type="range"
                min="-100"
                max="100"
                value={temperature}
                onChange={(e) => setTemperature(Number(e.target.value))}
              />
              <span>{temperature}</span>
            </label>
            <label>
              선명도:
              <input
                type="range"
                min="-100"
                max="100"
                value={sharpness}
                onChange={(e) => setSharpness(Number(e.target.value))}
              />
              <span>{sharpness}</span>
            </label>
          </div>
        )}

        {activeStep === 6 && (
          <div className="activeStep-six">
            <h2>필터효과</h2>
            <div className="filter-presets">
              {presets.map((preset) => (
                <div
                  key={preset.id}
                  className="filter-card"
                  onClick={() => applyPreset(preset)}
                >
                  <div
                    className="filter-preview"
                    style={{ background: "#ddd" }}
                  ></div>
                  <p>{preset.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeStep === 7 && (
          <div className="activeStep-seven">
            <h2>저장하기</h2>
            <p>사진 저장하기</p>
            <p>사진 공유하기</p>
          </div>
        )}
      </div>

      <div className="sideBar-preview">
        {loading ? (
          <div className="loading">
            <p>합성 중입니다...</p>
            <div className="spinner"></div>
          </div>
        ) : (
          <PreviewCanvas
            image={previewImage || image || null}
            background={background}
            brightness={brightness}
            contrast={contrast}
            saturation={saturation}
            temperature={temperature}
            sharpness={sharpness}
            currentPreset={currentPreset}
          />
        )}
      </div>
    </div>
  );
}
