import { h } from 'preact';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <nav className="nav">
          <a href="/" className="logo">k8150.net</a>
          <ul className="nav-links">
            {/* コンテンツを追加する場合は、以下のコメントアウトを外す。 */}
            {/* <li><a href="/about">About</a></li> */}
            {/* <li><a href="/works">Works</a></li> */}
            {/* <li><a href="/blog">Blog</a></li> */}
            {/* <li><a href="/contact">Contact</a></li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
}
