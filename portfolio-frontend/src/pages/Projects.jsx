"use client"

import { useState, useEffect } from "react"
import axios from "axios"

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filter, setFilter] = useState("all")

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      const response = await axios.get("/api/projects");
      setProjects(response.data.data)
      setLoading(false)
    } catch (err) {
      setError("Gagal memuat proyek. Pastikan server Laravel berjalan.")
      setLoading(false)
      console.error("Error fetching projects:", err)
    }
  }

  const getUniqueCategories = () => {
    const categories = projects.map((project) => {
      const techs = project.technologies.toLowerCase()
      if (techs.includes("laravel") && techs.includes("react")) return "fullstack"
      if (techs.includes("laravel") || techs.includes("php")) return "backend"
      if (techs.includes("react") || techs.includes("javascript")) return "frontend"
      return "other"
    })
    return ["all", ...new Set(categories)]
  }

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true
    const techs = project.technologies.toLowerCase()
    switch (filter) {
      case "fullstack":
        return techs.includes("laravel") && techs.includes("react")
      case "backend":
        return techs.includes("laravel") || techs.includes("php")
      case "frontend":
        return techs.includes("react") || techs.includes("javascript")
      default:
        return true
    }
  })

  const getCategoryName = (category) => {
    const names = {
      all: "Semua",
      fullstack: "Full Stack",
      backend: "Backend",
      frontend: "Frontend",
      other: "Lainnya",
    }
    return names[category] || category
  }

  if (loading) {
    return (
      <div className="projects">
        <div className="container">
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Memuat proyek...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="projects">
        <div className="container">
          <div className="error-container">
            <h2>Oops! Terjadi Kesalahan</h2>
            <p>{error}</p>
            <button onClick={fetchProjects} className="btn btn-primary">
              Coba Lagi
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="projects">
      <div className="container">
        <section className="projects-hero">
          <h1>Proyek Saya</h1>
          <p>
            Berikut adalah beberapa proyek yang telah saya kerjakan selama perkuliahan dan waktu luang. Setiap proyek
            menunjukkan kemampuan saya dalam berbagai teknologi web development.
          </p>
        </section>

        <section className="projects-filter">
          <div className="filter-buttons">
            {getUniqueCategories().map((category) => (
              <button
                key={category}
                className={`filter-btn ${filter === category ? "active" : ""}`}
                onClick={() => setFilter(category)}
              >
                {getCategoryName(category)}
              </button>
            ))}
          </div>
        </section>

        <section className="projects-grid">
          {filteredProjects.length === 0 ? (
            <div className="no-projects">
              <p>Tidak ada proyek yang sesuai dengan filter yang dipilih.</p>
            </div>
          ) : (
            filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                {project.featured && <div className="featured-badge">Featured</div>}
                <div className="project-image">
                  <img
                    src={project.image_url || "/placeholder.svg?height=200&width=300"}
                    alt={project.title}
                    onError={(e) => {
                      e.target.src = "/placeholder.svg?height=200&width=300"
                    }}
                  />
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.split(",").map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.demo_link && (
                      <a
                        href={project.demo_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.github_link && (
                      <a
                        href={project.github_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-sm"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </section>

        <section className="projects-cta">
          <div className="cta-content">
            <h2>Ingin Melihat Lebih Banyak?</h2>
            <p>Kunjungi profil GitHub saya untuk melihat semua proyek dan kontribusi open source</p>
            <a
              href="https://github.com/Fandisamaga"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Kunjungi GitHub
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Projects
