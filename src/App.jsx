import { useEffect, useState } from 'react'
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

  /* ==========================================
     FEED FLORIDA
  ========================================== */

  {
    title: 'Feed Florida',
    category: 'UI/UX / PRODUCT DESIGN',
    year: '2026',

    image: feedFlorida,

    intro:
      'A hurricane preparedness planning application designed to help Florida residents organize food, water, safety plans, and emergency information before a storm.',

    skills:
      'UI/UX Design / User Research / Figma / Prototyping / Usability Testing',

    duration:
      'January 2026 – May 2026',

    processLabel: 'Process',

    process: [
      'Research',
      'Requirements',
      'Low-Fidelity',
      'Figma',
      'High-Fidelity',
      'Testing',
      'Iteration',
    ],

    summary:
      'Our team conducted user research to better understand how Florida residents prepare for hurricanes and where confusion occurs. Those findings guided our requirements, wireframes, Figma prototypes, and final application, with accessibility and usability considered throughout the process.',

    secondSummary:
      'We then evaluated the experience through usability testing and used the results to identify issues with feature discoverability, input efficiency, and timeline guidance.',

    dropdownTitle:
      'Learn more about the process',

    caseStudy: [
      {
        number: '01',
        title: 'The Problem',
        text:
          'Our research showed that hurricane preparation was not primarily an information problem. People already had access to hurricane guides, but many still struggled to decide how much food and water to buy, when to begin preparing, and how to organize everything before landfall. We focused on creating step-by-step guidance that could turn scattered information into actionable decisions.',
      },

      {
        number: '02',
        title: 'User Research',
        text:
          'We conducted semi-structured interviews with 14 Florida residents, along with contextual inquiry, persona development, and scenario modeling. Common themes included uncertainty around food and water quantities, unclear evacuation decisions, time pressure, and increasing stress as a storm approached.',
      },

      {
        number: '03',
        title: 'Design Process',
        text:
          'We began with hand-drawn low-fidelity sketches focused on functionality, visual hierarchy, and simple navigation. Those concepts were translated into medium-fidelity Figma wireframes where we explored interface structure, icons, interactions, and the overall visual system. As the project evolved, we moved the final functional prototype to Base44 so we could support dynamic features and real-time functionality that were difficult to represent in Figma alone.',
      },

      {
        number: '04',
        title: 'Testing & Iteration',
        text:
          'We evaluated the prototype using think-aloud usability testing with Florida residents. We measured task completion time, task success, user errors, confusion points, verbal feedback, and overall satisfaction. Testing revealed that some features needed stronger visual hierarchy and clearer affordances, particularly the substitution feature, household input flow, and timeline guidance.',
      },

      {
        number: '05',
        title: 'Outcome & Reflection',
        text:
          'The strongest parts of the experience were the household planning and ration calculation tools, along with the hurricane severity dashboard. The biggest lesson from testing was that a feature can technically work and still create friction. In an emergency-focused product, clarity, feedback, and quick comprehension matter more than simply adding more functionality.',
      },

      {
        number: '06',
        title: 'My Contribution',
        text:
          'I contributed to research and requirements analysis, helped refine functional requirements and fit criteria, led implementation of the high-fidelity Figma prototype, and translated conceptual ideas into interactive components. I also assisted with usability testing, observed user interactions, developed low-fidelity sketches, and helped refine the design across iterations.',
      },
    ],

    extraImages: [],
  },


  /* ==========================================
     INTERACTIVE 3D PORTFOLIO
  ========================================== */

  {
    title: 'Interactive 3D Portfolio',
    category: 'WEB DEVELOPMENT / THREE.JS',
    year: '2026',

    image: threejs,

    intro:
      'An experimental portfolio website combining front-end development, original 3D design, computer graphics, and interactive digital storytelling.',

    skills:
      'React / Three.js / Blender / JavaScript / Computer Graphics',

    duration:
      'September 2026',

    processLabel: 'Process',

    process: [
      'Blender Modeling',
      'Materials & Lighting',
      'GLB Export',
      'Three.js',
      'Camera & Interaction',
      'Debugging',
      'Final Experience',
    ],

    summary:
      'I designed and developed this interactive portfolio using React, Three.js, JavaScript, and CSS, while creating the original 3D environment and assets in Blender.',

    secondSummary:
      'What began as a visual experiment became an introduction to real-time computer graphics. Building the project pushed me to learn more about cameras, coordinate systems, transformations, materials, lighting, rendering, and the technical pipeline required to move a Blender scene into an interactive browser experience.',

    dropdownTitle:
      'Learn more about the process',

    caseStudy: [
      {
        number: '01',
        title: 'Learning Computer Graphics',
        text:
          'This project became much more than an experiment in 3D web design. Building it required me to learn the fundamentals of computer graphics, including 3D coordinate systems, transformations, camera projection, lighting, materials, and real-time rendering. Working between Blender and Three.js helped me understand how the visual decisions I was making were connected to the systems underneath them.',
      },

      {
        number: '02',
        title: 'From Blender to the Browser',
        text:
          'I created original 3D assets in Blender and exported them into a format that could be loaded into a browser-based Three.js scene. This required me to think differently about modeling because the final environment was not a pre-rendered Blender scene. Every asset had to work efficiently inside a real-time interactive experience.',
      },

      {
        number: '03',
        title: 'Technical Challenges',
        text:
          'Translating a scene from Blender into the browser was one of the most challenging parts of the project. Models that appeared correct in Blender did not always behave the same way after export, especially when it came to scale, orientation, materials, lighting, and camera placement. Debugging these issues required me to isolate parts of the scene and understand how each stage affected the final result.',
      },

      {
        number: '04',
        title: 'Graphics, Math & Physics',
        text:
          'As the project became more complex, I began learning the mathematical and physical concepts behind computer graphics rather than simply adjusting values until something looked right. Concepts such as coordinate systems, object transformations, camera perspective, light direction, surface properties, and real-time rendering became directly connected to the design decisions I was making.',
      },

      {
        number: '05',
        title: 'Debugging the Scene',
        text:
          'A small visual problem could come from several different places: the Blender model, the material, the export settings, the Three.js scene, the camera, or the lighting. I learned to debug the environment systematically by isolating variables, testing individual components, and making small changes until I understood what was causing the problem.',
      },

      {
        number: '06',
        title: 'What I Learned',
        text:
          'This project taught me how closely creative work and engineering can overlap. I became more comfortable debugging visual systems, experimenting with unfamiliar technology, and breaking complex graphics problems into smaller pieces. It also gave me a stronger understanding of what is happening underneath a real-time 3D experience instead of treating the final visual as a black box.',
      },
    ],

    link:
      'https://pariasthana3.github.io/pari-portfolio/',

    linkText:
      'Check it out',

    extraImages: [],
  },


  /* ==========================================
     ASA
  ========================================== */

  {
    title: 'ASA Creative Direction',
    category: 'BRANDING / CREATIVE DIRECTION',
    year: '2023–2025',

    image: asa,

    intro:
      'Creative direction, branding, graphic design, and visual storytelling for UCF’s Asian Student Association.',

    skills:
      'Creative Direction / Branding / Graphic Design / Team Leadership',

    duration:
      'August 2023 – May 2025',

    summary:
      'I founded and led a multidisciplinary media committee of more than 40 designers, photographers, videographers, and content creators. During my time as Creative Director, the team grew by 40%.',

    secondSummary:
      'I produced and directed more than 150 digital graphics, branding materials, and campaigns that generated more than 50,000 views across the UCF community.',

    extraImages: [
      asa1,
      asa2,
      asa3,
      asaPhoto1,
      asaPhoto2,
    ],
  },


  /* ==========================================
     ROYALTEA
  ========================================== */

  {
    title: 'RoyalTea',
    category: 'BRANDING / PRODUCT DESIGN',
    year: '2026',

    image: royalTea,

    intro:
      'Selected branding, graphic design, and visual work created for RoyalTea.',

    skills:
      'Branding / Graphic Design / Product Design',

    duration:
      '2026',

    summary:
      'This project explores RoyalTea’s visual identity through branded graphics, promotional concepts, and design experimentation.',

    secondSummary: '',

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

  const [loading, setLoading] = useState(true)
  const [loaderLeaving, setLoaderLeaving] = useState(false)


  useEffect(() => {

    const exitTimer = setTimeout(() => {
      setLoaderLeaving(true)
    }, 1800)

    const removeTimer = setTimeout(() => {
      setLoading(false)
    }, 2300)

    return () => {
      clearTimeout(exitTimer)
      clearTimeout(removeTimer)
    }

  }, [])


  const closeEverything = () => {
    setActiveProject(null)
    setActivePanel(null)
  }


  return (
    <>


      {/* ==========================================
          LOADING SCREEN
      ========================================== */}

      {loading && (

        <div
          className={`loading-screen ${
            loaderLeaving ? 'loading-screen-leaving' : ''
          }`}
        >

          <div className="loader-center">

            <div className="loader-star">
              ✦
            </div>

            <p className="loader-name">
              pari asthana
            </p>

          </div>

        </div>

      )}



      <main>


        {/* ==========================================
            HERO
        ========================================== */}

        <section className="hero-section">

          <img
            src={landing}
            alt="Pari Asthana design portfolio"
            className="hero-image"
          />


          <nav className="hero-nav">

            <button onClick={() => setActivePanel('about')}>
              About Me
            </button>

            <button onClick={() => setActivePanel('links')}>
              Links
            </button>

            <button onClick={() => setActivePanel('gallery')}>
              Gallery
            </button>

          </nav>

        </section>



        {/* ==========================================
            FEATURED WORK
        ========================================== */}

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



        {/* ==========================================
            PROJECT MODAL
        ========================================== */}

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


                {/* PROJECT HEADING */}

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



                {/* PROJECT INTRO */}

                <p className="project-intro">
                  {activeProject.intro}
                </p>



                {/* SKILLS + DURATION */}

                <div className="project-info-grid">

                  <div>

                    <span className="info-label">
                      SKILLS
                    </span>

                    <p>
                      {activeProject.skills}
                    </p>

                  </div>


                  <div>

                    <span className="info-label">
                      DURATION
                    </span>

                    <p>
                      {activeProject.duration}
                    </p>

                  </div>

                </div>



                {/* ==========================================
                    PROCESS
                ========================================== */}

                {activeProject.process && (

                  <div className="process-area">

                    <p className="process-label">
                      {activeProject.processLabel}
                    </p>


                    <div className="process-timeline">

                      {activeProject.process.map((step, index) => (

                        <div
                          className="process-piece"
                          key={step}
                        >

                          <div className="process-step">
                            {step}
                          </div>


                          {index < activeProject.process.length - 1 && (

                            <div className="process-arrow">
                              →
                            </div>

                          )}

                        </div>

                      ))}

                    </div>

                  </div>

                )}



                {/* ==========================================
                    SUMMARY
                ========================================== */}

                <div className="summary-section">

                  <p className="summary-label">
                    Summary
                  </p>


                  <div className="summary-copy">

                    <p>
                      {activeProject.summary}
                    </p>


                    {activeProject.secondSummary && (

                      <p>
                        {activeProject.secondSummary}
                      </p>

                    )}

                  </div>



                  {/* LIVE PROJECT BUTTON */}

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



                {/* ==========================================
                    LEARN MORE DROPDOWN
                ========================================== */}

                {activeProject.caseStudy && (

                  <details className="case-dropdown">

                    <summary>

                      <span>
                        {activeProject.dropdownTitle}
                      </span>

                      <span className="dropdown-icon">
                        +
                      </span>

                    </summary>


                    <div className="dropdown-content">

                      {activeProject.caseStudy.map((section) => (

                        <section
                          className="case-section"
                          key={section.number}
                        >

                          <span className="case-number">
                            {section.number}
                          </span>


                          <div>

                            <h3>
                              {section.title}
                            </h3>

                            <p>
                              {section.text}
                            </p>

                          </div>

                        </section>

                      ))}

                    </div>

                  </details>

                )}



                {/* EXTRA IMAGES */}

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



        {/* ==========================================
            ABOUT ME
        ========================================== */}

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



        {/* ==========================================
            LINKS
        ========================================== */}

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
                  href={`${import.meta.env.BASE_URL}resume.pdf`}
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



        {/* ==========================================
            GALLERY
        ========================================== */}

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

    </>
  )
}


export default App