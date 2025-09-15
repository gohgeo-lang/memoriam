import { useState } from "react";
import "./Photo.css";

export default function Photo() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="sideBar">
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
        </ul>
      </div>
      <div className="sideBar-detail">
        {activeStep === 1 && (
          <div>
            <h2>우리아이 사진</h2>
            <p>업로드할 이미지를 선택하세요.</p>
            <ul>
              첨부이미지 가이드
              <li>피사체는 크면 좋아요.</li>
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
          <div>
            <h2>디자인템플릿</h2>
          </div>
        )}

        {activeStep === 4 && (
          <div>
            <h2>배경설정</h2>
          </div>
        )}

        {activeStep === 5 && (
          <div>
            <h2>사진보정</h2>
            <label>
              대비:
              <input />
            </label>
            <label>
              밝기:
              <input />
            </label>
            <label>
              채도:
              <input />
            </label>
            <label>
              색온도:
              <input />
            </label>
            <label>
              선명도:
              <input />
            </label>
          </div>
        )}

        {activeStep === 6 && (
          <div>
            <h2>필터효과</h2>
          </div>
        )}
      </div>

      <div className="sideBar-preview">
        <h2>미리보기 화면</h2>
      </div>
    </div>
  );
}
