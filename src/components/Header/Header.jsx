import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: "/about", label: "브랜드" },
    { path: "/guide", label: "안심가이드" },
    { label: "서비스", hasSubmenu: true },
    { path: "/support", label: "고객센터" },
  ];

  const submenuItems = [
    { path: "/estimate", label: "비교견적" },
    { path: "/photo", label: "영정사진" },
    { path: "/memoriam", label: "메모리얼" },
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

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header className="header z-1">
        <div className="header-left">
          <Link
            to="/"
            className="text-xl font-bold !no-underline !text-[#7b5449] transition duration-200 hover:scale-[1.02]"
          >
            Memoriam
          </Link>
          {activeMenu && <span className="header-active">{activeMenu}</span>}
        </div>

        <button className="header-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </header>

      <nav className={`menu ${isOpen ? "open" : ""}`}>
        {menuItems.map((item, index) =>
          item.hasSubmenu ? (
            <span
              key={item.label}
              onClick={() => setSubmenuOpen(!submenuOpen)}
              className="menu-item"
              style={{ transitionDelay: `${index * 0.1}s` }}
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
              className={`menu-item ${isActive(item.path) ? "active" : ""}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {item.label}
            </Link>
          )
        )}
      </nav>

      <div className={`submenu ${submenuOpen && isOpen ? "open" : ""}`}>
        {submenuItems.map((sub, subIndex) => (
          <Link
            key={sub.path}
            to={sub.path}
            onClick={() => {
              setIsOpen(false);
              setSubmenuOpen(false);
            }}
            className={`submenu-item ${isActive(sub.path) ? "active" : ""}`}
            style={{ transitionDelay: `${subIndex * 0.1 + 0.2}s` }}
          >
            {sub.label}
          </Link>
        ))}
      </div>
    </>
  );
}
