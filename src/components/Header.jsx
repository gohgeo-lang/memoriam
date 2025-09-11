import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/about">회사소개</Link>
          </li>
          <li>
            <Link to="/funeral">장례정보</Link>
          </li>
          <li>
            <Link to="/products">상품정보</Link>
          </li>
          <li>
            <Link to="/memorial">메모리얼</Link>
          </li>
          <li>
            <Link to="/support">고객센터</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
