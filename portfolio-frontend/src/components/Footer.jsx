import { Link } from "react-router-dom"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Suparman</h3>
            <p>Computer Science Student passionate about web development</p>
            <div className="footer-social">
              <a href="https://github.com/Fandisamaga" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/suparman006/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="mailto:fandisamaga@gmail.com">Email</a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Skills</h3>
            <ul className="footer-links">
              <li>Laravel Development</li>
              <li>React JS</li>
              <li>MySQL Database</li>
              <li>RESTful API</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="footer-contact">
              <p>📧 fandisamaga@email.com</p>
              <p>📱 +62 822-9625-9955</p>
              <p>📍 Buol, Sulawesi Tengah, Indonesia</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Suparman. All rights reserved.</p>
            <p>Built with ❤️ using React + Vite & Laravel</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
