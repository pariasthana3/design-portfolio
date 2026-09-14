import { useState } from 'react'
import './App.css'

import landing from './assets/1.png'

import threejs from './assets/3jsMockup.png'

import asa from './assets/asaMockup.png'
import asa1 from './assets/asa1.png'
import asa2 from './assets/asa2.png'
import asa3 from './assets/asa3.png'
import asaPhoto1 from './assets/asaphoto1.jpg'
import asaPhoto2 from './assets/asaphoto2.jpg'

import feedFlorida from './assets/FFMockup.png'

import royalTea from './assets/rtMockup.png'
import rt1 from './assets/rt1.png'
import rt2 from './assets/rt2.png'

import gallery1 from './assets/gallery1.png'
import gallery2 from './assets/galler2.png'
import gallery3 from './assets/gallery3.png'
import gallery4 from './assets/gallery4.png'
import gallery6 from './assets/gallery6.png'


const projects = [
  {
    title: 'Feed Florida',
    category: 'UI/UX / PRODUCT DESIGN',
    year: '2026',

    image: feedFlorida,

    intro:
      'A hurricane safety and resource planning web app designed to help users prepare for severe weather through accessible, user-centered information.',

    role: 'UI/UX Design / User Research / Prototyping',

    description:
      'Our team conducted user research and gathered feedback from a range of users to better understand hurricane preparedness needs. Those findings guided our wireframes and high-fidelity Figma designs, with accessibility and usability considered throughout the process.',

    secondDescription:
      'The final application also incorporated API-driven real-time hurricane tracking data. We presented a live demonstration explaining our design process, functionality, and final solution.',

    extraImages: [],
  },

  {
    title: 'Interactive 3D Portfolio',
    category: 'WEB DEVELOPMENT / THREE.JS',
    year: '2026',

    image: threejs,

    intro:
      'An experimental portfolio website combining front-end development, original 3D design, and interactive digital storytelling.',

    role: 'React / Three.js / Blender / JavaScript',

    description:
      'I designed and developed the project using React, Three.js, JavaScript, and CSS, translating my original visual concepts into a functional browser experience.',

    secondDescription:
      'I created original 3D assets in Blender and integrated them into the Three.js environment while learning how to bridge 3D design with responsive front-end development. I also used Git and GitHub throughout the development and testing process.',

    link:
      'https://pariasthana3.github.io/pari-portfolio/',

    linkText:
      'Check it out',

    extraImages: [],
  },

  {
    title: 'ASA Creative Direction',
    category: 'BRANDING / CREATIVE DIRECTION',
    year: '2023–2025',

    image: asa,

    intro:
      'Creative direction, branding, graphic design, and visual storytelling for UCF’s Asian Student Association.',

    role: 'Creative Director / Senior Advisor',

    description:
      'I founded and led a multidisciplinary media committee of more than 40 designers, photographers, videographers, and content creators. During my time as Creative Director, the team grew by 40%.',

    secondDescription:
      'I produced and directed more than 150 digital graphics, branding materials, and campaigns that generated more than 50,000 views across the UCF community.',

    extraImages: [
      asa1,
      asa2,
      asa3,
      asaPhoto1,
      asaPhoto2,
    ],
  },

  {
    title: 'RoyalTea',
    category: 'BRANDING / PRODUCT DESIGN',
    year: '2026',

    image: royalTea,

    intro:
      'Selected branding, graphic design, and visual work created for RoyalTea.',

    role: 'Branding / Graphic Design',

    description:
      'This project explores RoyalTea’s visual identity through branded graphics, promotional concepts, and design experimentation.',

    secondDescription: '',

    extraImages: [
      rt1,
      rt2,
    ],
  },
]


const galleryImages = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery6,
]


function App() {

  const [activeProject, setActiveProject] = useState(null)
  const [activePanel, setActivePanel] = useState(null)


  const closeEverything = () => {
    setActiveProject(null)
    setActivePanel(null)
  }


  return (
    <main>

      {/* =========================
          HERO
      ========================= */}

      <section className="hero-section">

        <img
          src={landing}
          alt="Pari Asthana design portfolio"
          className="hero-image"
        />

        <nav className="hero-nav">

          <button
            onClick={() => setActivePanel('about')}
          >
            About Me
          </button>

          <button
            onClick={() => setActivePanel('links')}
          >
            Links
          </button>

          <button
            onClick={() => setActivePanel('gallery')}
          >
            Gallery
          </button>

        </nav>

      </section>



      {/* =========================
          FEATURED WORK
      ========================= */}

      <section className="projects-section">

        <div className="projects-header">
          <span>featured work</span>
        </div>


        {projects.map((project, index) => (

          <article
            key={project.title}
            className="project-card"
            onClick={() => setActiveProject(project)}
          >

            <div className="project-image-wrapper">

              <img
                src={project.image}
                alt={project.title}
              />

            </div>


            <div className="project-meta">

              <div>

                <span className="project-number">

                  {String(index + 1).padStart(2, '0')}

                </span>

                <h2>
                  {project.title}
                </h2>

              </div>


              <div className="project-details">

                <p>
                  {project.category}
                </p>

                <p>
                  {project.year}
                </p>

              </div>

            </div>

          </article>

        ))}

      </section>



      {/* =========================
          PROJECT POPUP
      ========================= */}

      {activeProject && (

        <div
          className="modal-overlay"
          onClick={closeEverything}
        >

          <div
            className="modal"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              className="modal-close"
              onClick={closeEverything}
              aria-label="Close project"
            >
              ×
            </button>


            <div className="modal-image-wrapper">

              <img
                src={activeProject.image}
                alt={activeProject.title}
              />

            </div>


            <div className="modal-content">

              <div className="modal-heading">

                <div>

                  <p className="modal-category">
                    {activeProject.category}
                  </p>

                  <h2>
                    {activeProject.title}
                  </h2>

                </div>


                <p className="modal-year">
                  {activeProject.year}
                </p>

              </div>


              <p className="project-intro">
                {activeProject.intro}
              </p>


              <div className="project-info-grid">

                <div>

                  <span className="info-label">
                    ROLE
                  </span>

                  <p>
                    {activeProject.role}
                  </p>

                </div>


                <div>

                  <span className="info-label">
                    YEAR
                  </span>

                  <p>
                    {activeProject.year}
                  </p>

                </div>

              </div>


              <div className="case-study-text">

                <p>
                  {activeProject.description}
                </p>


                {activeProject.secondDescription && (

                  <p>
                    {activeProject.secondDescription}
                  </p>

                )}


                {activeProject.link && (

                  <a
                    href={activeProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    {activeProject.linkText} ↗
                  </a>

                )}

              </div>


              {activeProject.extraImages.length > 0 && (

                <div className="project-gallery">

                  {activeProject.extraImages.map((image, index) => (

                    <img
                      key={index}
                      src={image}
                      alt={`${activeProject.title} project example ${index + 1}`}
                    />

                  ))}

                </div>

              )}

            </div>

          </div>

        </div>

      )}



      {/* =========================
          ABOUT ME
      ========================= */}

      {activePanel === 'about' && (

        <div
          className="modal-overlay"
          onClick={closeEverything}
        >

          <div
            className="info-modal"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              className="info-close"
              onClick={closeEverything}
              aria-label="Close About Me"
            >
              ×
            </button>


            <p className="panel-label">
              ABOUT ME
            </p>


            <h2 className="panel-title">
              Hi, I'm Pari.
            </h2>


            <div className="about-copy">

              <p>
                I'm an Information Technology student at the University
                of Central Florida who enjoys working where creativity
                and technology meet. I love turning ideas into thoughtful
                digital experiences, whether I'm designing an interface,
                building for the web, or experimenting with a new creative
                tool.
              </p>

              <p>
                I'm naturally curious and learn best by making. I enjoy
                trying new things, solving problems with the tools I have,
                and refining ideas as I learn along the way.
              </p>

              <p>
                I'm currently pursuing my B.S. in Information Technology
                at UCF and exploring opportunities in UI/UX, product
                design, web development, and creative technology.
              </p>

            </div>


            <div className="about-tags">

              <span>UI/UX</span>
              <span>Product Design</span>
              <span>React</span>
              <span>Creative Technology</span>
              <span>Web Development</span>

            </div>

          </div>

        </div>

      )}



      {/* =========================
          LINKS
      ========================= */}

      {activePanel === 'links' && (

        <div
          className="modal-overlay"
          onClick={closeEverything}
        >

          <div
            className="info-modal links-modal"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              className="info-close"
              onClick={closeEverything}
              aria-label="Close Links"
            >
              ×
            </button>


            <p className="panel-label">
              LINKS
            </p>


            <h2 className="panel-title">
              Let's connect.
            </h2>


            <div className="links-list">

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Resume</span>
                <span>↗</span>
              </a>


              <a
                href="mailto:pariasthana3@gmail.com"
              >
                <span>Email</span>
                <span>↗</span>
              </a>


              <a
                href="https://www.linkedin.com/in/pari-asthana/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>LinkedIn</span>
                <span>↗</span>
              </a>

            </div>

          </div>

        </div>

      )}



      {/* =========================
          GALLERY
      ========================= */}

      {activePanel === 'gallery' && (

        <div
          className="modal-overlay"
          onClick={closeEverything}
        >

          <div
            className="gallery-modal"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              className="info-close"
              onClick={closeEverything}
              aria-label="Close Gallery"
            >
              ×
            </button>


            <div className="gallery-header">

              <p className="panel-label">
                GALLERY
              </p>

              <h2 className="panel-title">
                Other things I've made.
              </h2>

              <p className="gallery-description">
                A collection of graphics, experiments, and creative work
                from along the way.
              </p>

            </div>


            <div className="other-work-gallery">

              {galleryImages.map((image, index) => (

                <div
                  className={`gallery-item gallery-item-${index + 1}`}
                  key={index}
                >

                  <img
                    src={image}
                    alt={`Selected creative work ${index + 1}`}
                  />

                </div>

              ))}

            </div>

          </div>

        </div>

      )}

    </main>
  )
}


export default App