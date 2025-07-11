const About = () => {
    return (
      <div className="about">
        <div className="container">
          <section className="about-hero">
            <h1>Tentang Saya</h1>
            <p className="about-subtitle">Mahasiswa Teknik Informatika yang passionate dalam pengembangan web</p>
          </section>
  
          <section className="about-content">
            <div className="about-grid">
              <div className="about-text">
                <div className="about-section">
                  <h2>Profil Singkat</h2>
                  <p>
                    Saya adalah mahasiswa Teknik Informatika yang telah selesai semester 4 dan sekarang memasuki awal semester 5, portfolio ini saya buat khusus untuk 
                    syarat magang, saya dari Universitas Tadulako dengan IPK 3.37. Selama
                    perkuliahan, saya telah mempelajari berbagai teknologi pengembangan web, khususnya Laravel untuk
                    backend dan React JS untuk frontend.
                  </p>
                  <p>
                    Saya memiliki pengalaman dalam mengembangkan aplikasi web melalui berbagai proyek kuliah dan proyek
                    pribadi. Saya juga punya insiatif tinggi dalam proses belajar dan keingintahuan yang tinggi dalam pembelajaran.
                  </p>
                </div>
  
                <div className="about-section">
                  <h2>Pendidikan</h2>
                  <div className="education-item">
                    <h3> S1 Teknik Informatika</h3>
                    <p className="education-school">Universitas Tadulako</p>
                    <p className="education-period">2023 - Sekarang (Semester 5)</p>
                    <p className="education-gpa">IPK: 3.37/4.0</p>
                    <div className="education-courses">
                      <h4>Mata Kuliah Relevan:</h4>
                      <ul>
                        <li>Pemrograman Web</li>
                        <li>Basis Data</li>
                        <li>Rekayasa Perangkat Lunak</li>
                        <li>Algoritma dan Struktur Data</li>
                        <li>Jaringan Komputer</li>
                      </ul>
                    </div>
                  </div>
                </div>
  
                <div className="about-section">
                  <h2>Pengalaman</h2>
                  <div className="experience-item">
                    <h3>Magang – IT Support </h3>
                    <p className="experience-org">Subdivision of Planning and Programs
                    Dinas Koperasi and UKM, Buol </p>
                    <p className="experience-period">2022 </p>
                    <ul>
                      <li>Memberikan dukungan teknis dasar untuk operasional kantor sehari-hari, termasuk instalasi perangkat keras dan perangkat lunak.</li>
                      <li>Membantu dalam penyusunan dan pengelolaan dokumen program kerja kantor</li>
                      <li>Terlibat dalam konfigurasi dasar jaringan komputer untuk memastikan konektivitas</li>
                    </ul>
                  </div>
                </div>
              </div>
  
              <div className="about-sidebar">
                <div className="profile-card">
                  <img src="/img/profilsaya.jpg" alt="Profile" className="profile-img" />
                  <div className="profile-info">
                    <h3>SUPARMAN</h3>
                    <p>Computer Science Student</p>
                    <div className="profile-details">
                      <div className="detail-item">
                        <strong>Lokasi:</strong>
                        <span>Buol, Sulawesi Tengah,  Indonesia</span>
                      </div>
                      <div className="detail-item">
                        <strong>Email:</strong>
                        <span>fandisamaga@email.com</span>
                      </div>
                      <div className="detail-item">
                        <strong>Status:</strong>
                        <span>Mencari Magang</span>
                      </div>
                    </div>
                    <a href="/cv.pdf" download className="btn btn-primary btn-full">
                      Download CV
                    </a>
                  </div>
                </div>
  
                <div className="skills-card">
                  <h3>Technical Skills</h3>
                  <div className="skill-list">
                    <div className="skill-item">
                      <span className="skill-name">Laravel</span>
                      <div className="skill-bar">
                        <div className="skill-progress" style={{ width: "70%" }}></div>
                      </div>
                    </div>
                    <div className="skill-item">
                      <span className="skill-name">React JS</span>
                      <div className="skill-bar">
                        <div className="skill-progress" style={{ width: "60%" }}></div>
                      </div>
                    </div>
                    <div className="skill-item">
                      <span className="skill-name">PHP</span>
                      <div className="skill-bar">
                        <div className="skill-progress" style={{ width: "70%" }}></div>
                      </div>
                    </div>
                    <div className="skill-item">
                      <span className="skill-name">MySQL</span>
                      <div className="skill-bar">
                        <div className="skill-progress" style={{ width: "70%" }}></div>
                      </div>
                    </div>
                    <div className="skill-item">
                      <span className="skill-name">JavaScript</span>
                      <div className="skill-bar">
                        <div className="skill-progress" style={{ width: "50%" }}></div>
                      </div>
                    </div>
                    <div className="skill-item">
                      <span className="skill-name">Git</span>
                      <div className="skill-bar">
                        <div className="skill-progress" style={{ width: "60%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  
          <section className="goals-section">
            <div className="goals-content">
              <h2>Tujuan Magang</h2>
              <div className="goals-grid">
                <div className="goal-item">
                  <div className="goal-icon">🎯</div>
                  <h3>Pengalaman Praktis</h3>
                  <p>Mengaplikasikan ilmu yang dipelajari di perkuliahan dalam proyek nyata di industri</p>
                </div>
                <div className="goal-item">
                  <div className="goal-icon">📚</div>
                  <h3>Pembelajaran</h3>
                  <p>Belajar dari profesional berpengalaman dan memahami workflow development di perusahaan</p>
                </div>
                <div className="goal-item">
                  <div className="goal-icon">🤝</div>
                  <h3>Kontribusi</h3>
                  <p>Memberikan kontribusi positif pada tim dan proyek yang sedang dikerjakan</p>
                </div>
                <div className="goal-item">
                  <div className="goal-icon">🚀</div>
                  <h3>Pengembangan Karir</h3>
                  <p>Mempersiapkan diri untuk memasuki dunia kerja setelah lulus kuliah</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
  
  export default About
  