import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: "/", label: "홈" },
    { path: "/about", label: "회사소개" },
    { path: "/funeral", label: "장례정보" },
    { path: "/products", label: "상품정보" },
    { label: "메모리얼", hasSubmenu: true },
    { path: "/support", label: "고객센터" },
  ];

  const submenuItems = [
    { path: "/memoriam/human", label: "고인 추모" },
    { path: "/memoriam/pet", label: "반려동물 추모" },
  ];

  let activeMenu = null;

  for (let item of menuItems) {
    if (
      item.path &&
      item.path !== "/" &&
      location.pathname.startsWith(item.path)
    ) {
      activeMenu = item.label;
      break;
    }
  }

  if (!activeMenu) {
    for (let sub of submenuItems) {
      if (location.pathname.startsWith(sub.path)) {
        activeMenu = sub.label;
        break;
      }
    }
  }

  console.log("현재 경로:", location.pathname, "선택된 메뉴:", activeMenu);

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          background: "rgba(255,255,255,0.8)",
          backdropFilter: "blur(10px)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 24px",
          zIndex: 1000,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "30px",
            alignItems: "baseline",
          }}
        >
          <div
            style={{ fontWeight: "bold", fontSize: "20px", color: "#5a3e36" }}
          >
            Memoriam
          </div>

          {activeMenu && (
            <span style={{ fontSize: "16px", color: "#7b5449" }}>
              {activeMenu}
            </span>
          )}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            fontSize: "22px",
            background: "none",
            border: "none",
            color: "#5a3e36",
            cursor: "pointer",
          }}
        >
          ☰
        </button>
      </header>

      <div
        style={{
          position: "fixed",
          top: "70px",
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          gap: "24px",
          padding: "12px",
          zIndex: 999,
        }}
      >
        {menuItems.map((item, index) =>
          item.hasSubmenu ? (
            <span
              key={item.label}
              onClick={() => setSubmenuOpen(!submenuOpen)}
              style={{
                fontSize: "18px",
                fontWeight: "500",
                color: "#5a3e36",
                cursor: "pointer",
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateY(0)" : "translateY(-20px)",
                transition: `all 0.4s ease ${index * 0.1}s`,
              }}
            >
              {item.label}
            </span>
          ) : (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => {
                setIsOpen(false);
                setSubmenuOpen(false);
              }}
              style={{
                fontSize: "18px",
                fontWeight: "500",
                color: isActive(item.path) ? "#7b5449" : "#5a3e36",
                borderBottom: isActive(item.path)
                  ? "2px solid #7b5449"
                  : "none",
                textDecoration: "none",
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateY(0)" : "translateY(-20px)",
                transition: `all 0.4s ease ${index * 0.1}s`,
              }}
            >
              {item.label}
            </Link>
          )
        )}
      </div>

      <div
        style={{
          position: "fixed",
          top: "110px",
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          gap: "24px",
          padding: "12px",
          zIndex: 998,
        }}
      >
        {submenuItems.map((sub, subIndex) => (
          <Link
            key={sub.path}
            to={sub.path}
            onClick={() => {
              setIsOpen(false);
              setSubmenuOpen(false);
            }}
            style={{
              fontSize: "16px",
              fontWeight: "400",
              color: isActive(sub.path) ? "#7b5449" : "#5a3e36",
              borderBottom: isActive(sub.path) ? "2px solid #7b5449" : "none",
              textDecoration: "none",
              opacity: submenuOpen && isOpen ? 1 : 0,
              transform:
                submenuOpen && isOpen ? "translateY(0)" : "translateY(-10px)",
              transition: `all 0.4s ease ${subIndex * 0.1 + 0.2}s`,
            }}
          >
            {sub.label}
          </Link>
        ))}
      </div>
    </>
  );
}
