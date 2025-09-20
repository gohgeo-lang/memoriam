import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

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
      <header className="z-10 fixed flex justify-between py-2 px-2 top-0 left-0 right-0 bg-gray-100/80 backdrop-blur-sm">
        <div className="flex items-baseline gap-3">
          <Link
            to="/"
            className="text-xl font-bold no-underline text-[#7b5449] transition duration-200 hover:scale-[1.02]"
          >
            Memoriam
          </Link>
          {activeMenu && (
            <span className="text-xs font-thin">{activeMenu}</span>
          )}
        </div>

        {!isOpen ? (
          <button
            className="text-2xl text-[#7b5449] cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            ☰
          </button>
        ) : submenuOpen ? (
          <button
            className="text-2xl text-[#7b5449] cursor-pointer z-20"
            onClick={() => setSubmenuOpen(false)}
          >
            ←
          </button>
        ) : (
          <button
            className="text-2xl text-[#7b5449] cursor-pointer z-30"
            onClick={() => {
              setIsOpen(false);
              setSubmenuOpen(false);
            }}
          >
            x
          </button>
        )}

        <nav
          className={`fixed top-4 left-0 right-0 flex justify-center gap-3 p-0
    transition-all duration-300 ease-in-out ${
      isOpen && !submenuOpen
        ? "opacity-100 translate-x-20 text-[#7b5449] pointer-events-auto"
        : "opacity-0 translate-x-100 text-[#7b5449] pointer-events-none"
    }`}
        >
          {menuItems.map((item, index) =>
            item.hasSubmenu ? (
              <span
                key={item.label}
                onClick={() => setSubmenuOpen(!submenuOpen)}
                className="text-sm font-thin text-[#7b5449] cursor-pointer"
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
                className={`text-sm font-thin text-[#7b5449] no-underline text-inherit cursor-pointer `}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div
          className={`fixed top-4 left-0 right-0 flex justify-center gap-6 p-0 ${
            submenuOpen && isOpen
              ? "opacity-100 translate-x-20 text-[#7b5449] pointer-events-auto"
              : "opacity-0 translate-x-100 text-[#7b5449] pointer-events-none"
          }`}
        >
          {submenuItems.map((sub, subIndex) => (
            <Link
              className="no-underline text-sm font-thin text-[#7b5449]"
              key={sub.path}
              to={sub.path}
              onClick={() => {
                setIsOpen(false);
                setSubmenuOpen(false);
              }}
              style={{ transitionDelay: `${subIndex * 0.1 + 0.2}s` }}
            >
              {sub.label}
            </Link>
          ))}
        </div>
      </header>
    </>
  );
}
