// src/components/Footer.jsx
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {currentYear} DevBase.</p> 
      <div className="social-links">
        
  
        <a 
          href="https://www.linkedin.com/in/obai-albek-485428379" 
          target="_blank" 
          rel="noreferrer"
        >
          LinkedIn
        </a>

 
        <a 
          href="https://github.com/ObaiAlbek" 
          target="_blank" 
          rel="noreferrer"
        >
          GitHub
        </a>

      </div>
    </footer>
  );
}

export default Footer;