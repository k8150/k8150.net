import { h } from 'preact';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>© {currentYear} koji haigo</p>
    </footer>
  );
}
