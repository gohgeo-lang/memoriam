export default function Home() {
  return (
    <div>
      <section
        style={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "40px 20px",
          backgroundColor: "#ffffff",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", color: "#222", marginBottom: "1rem" }}>
          소중한 기억을 가장 선명히 조각합니다.
        </h1>
        <p style={{ fontSize: "1.1rem", color: "#444", maxWidth: "600px" }}>
          사람과 반려동물 모두를 위한 고요하고 따뜻한 추모 공간, 메모리엄
        </p>
        <button
          style={{
            marginTop: "2rem",
            backgroundColor: "var(--color-primary)",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            padding: "12px 24px",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          추모 페이지 만들기
        </button>
      </section>

      <section
        style={{
          padding: "60px 20px",
          backgroundColor: "#fafafa",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "1.8rem", color: "#222", marginBottom: "2rem" }}>
          메모리엄이 전하는 가치
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          <div className="card">
            <h3 style={{ color: "var(--color-primary)" }}>기억</h3>
            <p>남겨진 이들의 이야기를 이어갑니다.</p>
          </div>
          <div className="card">
            <h3 style={{ color: "var(--color-primary)" }}>위로</h3>
            <p>슬픔을 함께 나누고, 고요히 곁에 머뭅니다.</p>
          </div>
          <div className="card">
            <h3 style={{ color: "var(--color-primary)" }}>동행</h3>
            <p>사람과 반려동물 모두를 위한 추모 서비스.</p>
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.8rem", color: "#222", marginBottom: "2rem" }}>
          추모의 공간 미리보기
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div className="card" style={{ width: "250px" }}>
            <img
              src="/images/sample1.jpg"
              alt="추모 사진"
              style={{
                width: "100%",
                borderRadius: "8px",
                marginBottom: "12px",
              }}
            />
            <h3 style={{ color: "#222" }}>홍길동 (1950–2025)</h3>
            <p style={{ fontSize: "0.9rem", color: "#555" }}>
              “따뜻한 미소로 기억됩니다.”
            </p>
          </div>
        </div>
        <button
          style={{
            marginTop: "2rem",
            backgroundColor: "var(--color-primary)",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            padding: "12px 24px",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          더 많은 이야기 보기
        </button>
      </section>

      <section
        style={{
          padding: "60px 20px",
          backgroundColor: "#f5f5f5",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "1.6rem", color: "#222", marginBottom: "1rem" }}>
          필요한 순간, 곁에 있겠습니다.
        </h2>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            maxWidth: "400px",
            margin: "0 auto",
          }}
        >
          <input
            type="text"
            placeholder="이름"
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "6px",
            }}
          />
          <input
            type="tel"
            placeholder="연락처"
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "6px",
            }}
          />
          <button type="submit">상담 신청</button>
        </form>
      </section>
    </div>
  );
}
