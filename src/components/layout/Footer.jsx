import "./Footer.css";

function Footer() {
  const anioActual = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {anioActual} Jhon — Hecho con React</p>
    </footer>
  );
}

export default Footer;
