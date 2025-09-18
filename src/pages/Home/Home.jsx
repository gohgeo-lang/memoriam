import "./Home.css";
import Input from "../../components/Input/Input";
import Section from "../../components/Section/Section";

export default function Home() {
  return (
    <div className="home">
      <Section className="hero">
        <h1>소중한 기억을 가장 선명히 조각합니다.</h1>
        <p>우리아이를 위한 고요하고 따뜻한 추모 공간, 메모리엄</p>
      </Section>

      <Section className="values" title="메모리엄이 전하는 가치">
        <div className="values-list">
          <div className="card">
            <h3 className="highlight">기억</h3>
            <p>남겨진 이들의 이야기를 이어갑니다.</p>
          </div>
          <div className="card">
            <h3 className="highlight">위로</h3>
            <p>슬픔을 함께 나누고, 고요히 곁에 머뭅니다.</p>
          </div>
          <div className="card">
            <h3 className="highlight">동행</h3>
            <p>사람과 반려동물 모두를 위한 추모 서비스.</p>
          </div>
        </div>
      </Section>

      <Section className="preview" title="추모의 공간 미리보기">
        <div className="preview-list">
          <div className="card preview-card">
            <img src="./img/pet.jpg" alt="추모 사진" />
            <h3>댕청이</h3>
            <h5>(2010 ~ 2025)</h5>
            <p>“내새깽이”</p>
          </div>
        </div>
        <button className="primary-btn">더 많은 이야기 보기</button>
      </Section>

      <Section className="contact" title="필요한 순간, 곁에 있겠습니다.">
        <form className="contact-form">
          <Input label="이름" placeholder="이름을 입력하세요" />
          <Input label="연락처" type="tel" placeholder="010-1234-5678" />
          <button type="submit" className="primary-btn">
            상담 신청
          </button>
        </form>
      </Section>
    </div>
  );
}
