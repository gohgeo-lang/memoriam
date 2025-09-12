import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* 회사 정보 */}
        <div className="footer-company">
          <strong className="footer-brand">메모리엄</strong>
          <p>대표: 홍길동 | 사업자등록번호: 123-45-67890</p>
          <p>주소: 서울특별시 ○○구 ○○로 123</p>
        </div>

        {/* 고객센터 */}
        <div className="footer-support">
          <p>
            고객센터:{" "}
            <a href="tel:15880000" className="footer-link-primary">
              1588-0000
            </a>
          </p>
          <p>운영시간: 평일 09:00 ~ 18:00</p>
        </div>

        {/* 링크 */}
        <div className="footer-links">
          <a href="/privacy" className="footer-link">
            개인정보 처리방침
          </a>
          <a href="/terms" className="footer-link">
            이용약관
          </a>
        </div>

        {/* 카피라이트 */}
        <div className="footer-bottom">
          <p>© 2025 Memoriam. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
