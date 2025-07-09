"use client"

import { useState } from "react"
import axios from "axios"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState({ type: "", message: "" })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: "", message: "" })

    try {
      const response = await axios.post("/api/contact", formData)
      setStatus({
        type: "success",
        message: "Pesan berhasil dikirim! Saya akan segera membalas.",
      })
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      setStatus({
        type: "error",
        message: "Gagal mengirim pesan. Silakan coba lagi atau hubungi langsung via email.",
      })
      console.error("Error sending message:", error)
    }

    setLoading(false)
  }

  return (
    <div className="contact">
      <div className="container">
        <section className="contact-hero">
          <h1>Hubungi Saya</h1>
          <p>
            Tertarik untuk berkolaborasi atau memberikan kesempatan magang? Mari berdiskusi! Saya selalu terbuka untuk
            peluang baru.
          </p>
        </section>

        <section className="contact-content">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Informasi Kontak</h2>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-icon">📧</div>
                  <div className="contact-details">
                    <h3>Email</h3>
                    <p>john.doe@email.com</p>
                    <a href="mailto:john.doe@email.com" className="contact-link">
                      Kirim Email
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">📱</div>
                  <div className="contact-details">
                    <h3>Telepon</h3>
                    <p>+62 812-3456-7890</p>
                    <a href="tel:+6281234567890" className="contact-link">
                      Hubungi
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">📍</div>
                  <div className="contact-details">
                    <h3>Lokasi</h3>
                    <p>Jakarta, Indonesia</p>
                    <span className="contact-note">Tersedia untuk remote/hybrid</span>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">💼</div>
                  <div className="contact-details">
                    <h3>LinkedIn</h3>
                    <p>linkedin.com/in/johndoe</p>
                    <a
                      href="https://linkedin.com/in/johndoe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      Kunjungi Profil
                    </a>
                  </div>
                </div>
              </div>

              <div className="availability-card">
                <h3>Ketersediaan Magang</h3>
                <div className="availability-status available">
                  <div className="status-indicator"></div>
                  <span>Tersedia untuk magang</span>
                </div>
                <div className="availability-details">
                  <div className="detail-row">
                    <strong>Periode:</strong>
                    <span>Februari - Juni 2024</span>
                  </div>
                  <div className="detail-row">
                    <strong>Durasi:</strong>
                    <span>3-6 bulan</span>
                  </div>
                  <div className="detail-row">
                    <strong>Mode:</strong>
                    <span>On-site / Hybrid / Remote</span>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h3>Ikuti Saya</h3>
                <div className="social-buttons">
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn github"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn linkedin"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://instagram.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn instagram"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <div className="contact-form-card">
                <h2>Kirim Pesan</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Nama Lengkap</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Masukkan nama lengkap"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="nama@email.com"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subjek</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Subjek pesan"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Pesan</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tulis pesan Anda di sini..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`btn btn-primary btn-full ${loading ? "loading" : ""}`}
                  >
                    {loading ? "Mengirim..." : "Kirim Pesan"}
                  </button>
                </form>

                {status.message && <div className={`status-message ${status.type}`}>{status.message}</div>}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact
