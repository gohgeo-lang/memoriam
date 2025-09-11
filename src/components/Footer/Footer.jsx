export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#f9f9f9",
        padding: "40px 20px",
        marginTop: "60px",
        color: "#555",
        fontSize: "0.9rem",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <strong style={{ color: "var(--color-primary)" }}>메모리엄</strong>
          <p>대표: 홍길동 | 사업자등록번호: 123-45-67890</p>
          <p>주소: 서울특별시 ○○구 ○○로 123</p>
        </div>

        <div style={{ textAlign: "center" }}>
          <p>
            고객센터:{" "}
            <a href="tel:15880000" style={{ color: "var(--color-primary)" }}>
              1588-0000
            </a>
          </p>
          <p>운영시간: 평일 09:00 ~ 18:00</p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
          }}
        >
          <a href="/privacy" style={{ color: "var(--color-text)" }}>
            개인정보 처리방침
          </a>
          <a href="/terms" style={{ color: "var(--color-text)" }}>
            이용약관
          </a>
        </div>

        <div
          style={{
            borderTop: "1px solid var(--color-border)",
            paddingTop: "12px",
            textAlign: "center",
          }}
        >
          <p>© 2025 Memoriam. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
