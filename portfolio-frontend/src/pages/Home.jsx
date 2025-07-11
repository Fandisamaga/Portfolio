import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-image">
          <img src="/img/profilsaya.jpg" alt="Profile" className="profile-img" />
          </div>
          <h1>
            Halo, Saya <span className="highlight">Suparman</span>
          </h1>
          <p className="hero-subtitle">Mahasiswa Teknik Informatika Semester 5</p>
          <p className="hero-description">
            Passionate dalam pengembangan web dengan Laravel dan React JS. Sedang mencari kesempatan magang untuk
            mengembangkan keterampilan dan berkontribusi pada proyek nyata.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">
              Lihat Proyek Saya
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Hubungi Saya
            </Link>
          </div>
          <div className="hero-social">
            <a href="https://github.com/Fandisamaga" target="_blank" rel="noopener noreferrer" className="social-link">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/suparman006/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              LinkedIn
            </a>
            <a href="mailto:fandisamaga@gmail.com" className="social-link">
                Email
            </a>
          </div>
        </div>
      </section>

      <section className="skills-preview">
        <div className="container">
          <h2>Keahlian Utama</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">🎨</div>
              <h3>Frontend Development</h3>
              <p>HTML5, CSS3, JavaScript, React JS</p>
              <div className="skill-tags">
                <span className="tag">React</span>
                <span className="tag">JavaScript</span>
                <span className="tag">CSS3</span>
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-icon">⚙️</div>
              <h3>Backend Development</h3>
              <p>PHP, Laravel Framework, RESTful API</p>
              <div className="skill-tags">
                <span className="tag">Laravel</span>
                <span className="tag">PHP</span>
                <span className="tag">API</span>
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🗄️</div>
              <h3>Database</h3>
              <p>MySQL, MariaDB, Database Design</p>
              <div className="skill-tags">
                <span className="tag">MySQL</span>
                <span className="tag">MariaDB</span>
                <span className="tag">SQL</span>
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🛠️</div>
              <h3>Tools & Others</h3>
              <p>Git, GitHub, VS Code, Postman</p>
              <div className="skill-tags">
                <span className="tag">Git</span>
                <span className="tag">GitHub</span>
                <span className="tag">VS Code</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Siap untuk Magang </h2>
            <p> sedang mencari kesempatan magang untuk semester 5 di tahun 2025 saat ini</p>
            <Link to="/contact" className="btn btn-primary">
              Mari Berdiskusi
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
