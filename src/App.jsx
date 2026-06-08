import React, { useState, useEffect } from 'react';
import ContactModal from './components/ContactModal';
import workstationImg from './assets/video_editing_workstation.png';
import profileImg from './assets/profile_hashir.png';
import davinciLogo from './assets/davinci_resolve_logo.png';
import showreelVideo from './assets/Showreel for web.mp4';
import { profileData, servicesData, projectsData } from './data/portfolioData';

const getServiceIcon = (name) => {
  const normName = name ? name.toLowerCase() : '';
  if (normName.includes('ai')) {
    return (
      <svg viewBox="0 0 24 24" className="service-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    );
  }
  if (normName.includes('social') || normName.includes('ad')) {
    return (
      <svg viewBox="0 0 24 24" className="service-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    );
  }
  if (normName.includes('branded') || normName.includes('brand')) {
    return (
      <svg viewBox="0 0 24 24" className="service-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    );
  }
  if (normName.includes('promo')) {
    return (
      <svg viewBox="0 0 24 24" className="service-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    );
  }
  if (normName.includes('retainer')) {
    return (
      <svg viewBox="0 0 24 24" className="service-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    );
  }
  if (normName.includes('tvc') || normName.includes('tv')) {
    return (
      <svg viewBox="0 0 24 24" className="service-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    );
  }
  if (normName.includes('film') || normName.includes('short')) {
    return (
      <svg viewBox="0 0 24 24" className="service-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
        <line x1="7" y1="2" x2="7" y2="22" />
        <line x1="17" y1="2" x2="17" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="2" y1="7" x2="7" y2="7" />
        <line x1="2" y1="17" x2="7" y2="17" />
        <line x1="17" y1="17" x2="22" y2="17" />
        <line x1="17" y1="7" x2="22" y2="7" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="service-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
};

const getProjectIcon = (title) => {
  const normTitle = title ? title.toLowerCase() : '';
  if (normTitle.includes('music')) {
    return (
      <svg viewBox="0 0 24 24" className="project-svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    );
  }
  if (normTitle.includes('wedding')) {
    return (
      <svg viewBox="0 0 24 24" className="project-svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    );
  }
  if (normTitle.includes('social')) {
    return (
      <svg viewBox="0 0 24 24" className="project-svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    );
  }
  if (normTitle.includes('ai')) {
    return (
      <svg viewBox="0 0 24 24" className="project-svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    );
  }
  if (normTitle.includes('short') || normTitle.includes('film')) {
    return (
      <svg viewBox="0 0 24 24" className="project-svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
        <line x1="7" y1="2" x2="7" y2="22" />
        <line x1="17" y1="2" x2="17" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="2" y1="7" x2="7" y2="7" />
        <line x1="2" y1="17" x2="7" y2="17" />
        <line x1="17" y1="17" x2="22" y2="17" />
        <line x1="17" y1="7" x2="22" y2="7" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="project-svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  );
};

function App() {
  const [profile, setProfile] = useState(profileData);
  const [services, setServices] = useState(servicesData);
  const [projects, setProjects] = useState(projectsData);
  const [activeVideoUrl, setActiveVideoUrl] = useState(null);
  const [activeTab, setActiveTab] = useState('home'); // tab router: 'home', 'portfolio', 'about'
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('Get In Touch');
  
  const [toastMessage, setToastMessage] = useState('');
  const [toastShow, setToastShow] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };

  const handleSuccess = (message) => {
    setToastMessage(message);
    setToastShow(true);
    setTimeout(() => {
      setToastShow(false);
    }, 4000);
  };

  const handleProjectClick = (url) => {
    if (url) {
      setActiveVideoUrl(url);
    }
  };

  return (
    <div className="app-wrapper">
      {/* Full-width purple header */}
      <header>
        <div className="header-inner">
          <div className="logo-container" onClick={() => setActiveTab('home')} style={{ cursor: 'pointer' }}>
            <span className="logo-text">Hc</span>
          </div>
          <nav>
            <a 
              href="#home" 
              className={activeTab === 'home' ? 'active' : ''} 
              onClick={(e) => { e.preventDefault(); setActiveTab('home'); }}
            >
              Home
            </a>
            <a 
              href="#portfolio" 
              className={activeTab === 'portfolio' ? 'active' : ''} 
              onClick={(e) => { e.preventDefault(); setActiveTab('portfolio'); }}
            >
              Portfolio
            </a>
            <a 
              href="#about" 
              className={activeTab === 'about' ? 'active' : ''} 
              onClick={(e) => { e.preventDefault(); setActiveTab('about'); }}
            >
              About
            </a>
          </nav>
        </div>
      </header>

      {/* Main content grid containing sidebar and main visual/details area */}
      {activeTab === 'home' && (
        <div className="main-container">
          {/* Left Column: CTA Buttons sidebar */}
          <aside className="cta-column">
            <button className="btn-blue" onClick={() => openModal('Get In Touch')}>
              Get In Touch
            </button>
            <button onClick={() => setActiveVideoUrl('/resume.pdf')} className="btn-blue" style={{ border: 'none', outline: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
             RESUME
            </button>
            
            <div className="sidebar-socials">
              <a href="https://www.instagram.com/c_.hashir?igsh=OWk1bXBvZmpvZHhh" target="_blank" rel="noopener noreferrer" className="sidebar-social-link instagram">
                <svg viewBox="0 0 24 24" className="social-svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://wa.me/917356978584" target="_blank" rel="noopener noreferrer" className="sidebar-social-link whatsapp">
                <svg viewBox="0 0 24 24" className="social-svg" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.451L0 24zm6.59-4.846c1.6.95 2.727 1.48 4.721 1.485 5.502.003 9.971-4.469 9.974-9.978.002-2.67-1.038-5.18-2.93-7.078-1.89-1.898-4.4-2.943-7.073-2.943-5.51 0-9.98 4.47-9.983 9.983-.001 2.03.543 3.197 1.436 4.767l-.986 3.6 3.69-.97-.08.056z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/hashir-c" target="_blank" rel="noopener noreferrer" className="sidebar-social-link linkedin">
                <svg viewBox="0 0 24 24" className="social-svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </aside>

          {/* Right Area: Images and Info details */}
          <div className="right-content">
            
            {/* Top Images row */}
            <div className="images-row">
              <div className="workstation-container">
                <img 
                  src={workstationImg} 
                  alt="Video Editing Workstation" 
                  className="workstation-img"
                />
              </div>
              <div className="profile-container">
                <img 
                  src={profileImg} 
                  alt="C Hashir Profile" 
                  className="profile-img"
                />
              </div>
            </div>

            {/* Bottom details row */}
            <div className="details-row">
              
              {/* Left Column: Name */}
              <div className="details-column">
                <span className="column-title">Name</span>
                <h1 className="name-value">{profile.name}</h1>
              </div>

              {/* Right Column: Experience table */}
              <div className="details-column">
                <div className="experience-header-row">
                  <span className="column-title">Profession</span>
                  <span className="column-title">Expreince</span>
                </div>
                <div className="info-list">
                  {profile.experiences.map((exp, idx) => (
                    <div key={idx} className="info-row experience-data-row">
                      <span className="profession-name">{exp.profession}</span>
                      <span className="experience-years">{exp.years}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* Lower Bento Grid Section */}
      {activeTab === 'home' && (
        <section className="bento-section">
          <div className="bento-grid">
            
            {/* Cell 1: HEY THERE Bio */}
            <div className="bento-cell bio-cell">
              <div className="bio-greeting">HEY THERE</div>
              <p className="bio-paragraph">{profile.bio}</p>
            </div>

            {/* Cell 2: SHOW REEL */}
            <div className="bento-cell showreel-cell">
              <div 
                className="video-inner" 
                style={{ position: 'relative', overflow: 'hidden' }}
              >
                <video 
                  src={showreelVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  controlsList="nofullscreen nodownload noplaybackrate"
                  disablePictureInPicture
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </div>

            {/* Cell 3: EXPOLORE */}
            <div className="bento-cell explore-cell">
              <span className="explore-title">EXPOLORE</span>
              <div className="explore-buttons">
                <button className="btn-explore" onClick={() => setActiveTab('portfolio')}>PORTFOLIO</button>
                <button className="btn-explore" onClick={() => setActiveTab('about')}>ABOUT</button>
              </div>
            </div>

            {/* Cell 4: SOFTWARE ICONS */}
            <div className="bento-cell software-cell">
              <div className="software-grid">
                <div className="icon-wrapper pr-logo" title="Adobe Premiere Pro">
                  <span>Pr</span>
                </div>
                <div className="icon-wrapper ae-logo" title="Adobe After Effects">
                  <span>Ae</span>
                </div>
                <div className="icon-wrapper resolve-logo" title="DaVinci Resolve" style={{ overflow: 'hidden', border: 'none', background: 'transparent' }}>
                  <img src={davinciLogo} alt="DaVinci Resolve" style={{ width: '100%', height: '100%', objectFit: 'contain', transform: 'scale(1.25)' }} />
                </div>
                <div className="icon-wrapper higgsfield-logo" title="Higgsfield AI">
                  <svg viewBox="0 0 80 80" className="svg-icon">
                    <rect width="80" height="80" rx="16" fill="#c0ff00" />
                    <path d="M64.2786 39.6003L64.2323 39.0943C63.7939 34.2383 60.6336 25.102 51.8677 25.102C45.3627 25.102 40.4487 31.5229 36.112 37.1838C32.6515 41.7173 29.6533 45.6063 26.3542 45.6063C25.4773 45.5146 24.3472 45.0772 23.6555 44.0877C23.0326 43.1898 22.8712 42.0393 23.1939 40.6585C23.7011 38.4722 26.6081 36.447 29.6758 34.2838C31.3594 33.1333 33.09 31.9135 34.2895 30.7399C37.75 27.4031 39.5031 24.9866 39.5031 21.0976C39.5031 17.2087 37.3579 15.2751 35.5585 14.4465C31.9598 12.79 26.6775 13.7564 23.3096 16.6565C22.8024 17.117 22.2946 17.5537 21.833 17.968C18.442 20.9828 16.1586 23.0312 10.9219 21.4657V27.7712C17.8653 30.8322 23.7018 24.9866 25.9164 22.2943C27.6232 20.5223 29.4225 19.4866 30.7609 19.4866H30.8304C31.4302 19.5097 31.9374 19.7399 32.307 20.1542C32.9068 20.8449 33.1376 21.6504 33.0219 22.5476C32.7679 24.4351 30.8072 26.6437 27.2085 29.0602C22.9869 31.891 15.9284 36.6317 15.3743 42.5921C14.959 46.8729 17.1736 51.1531 20.6341 52.8096C28.7077 56.63 33.6216 50.0481 38.8345 43.0981C42.8253 37.736 46.6085 32.6504 51.8684 32.6504C56.5972 32.6504 58.3502 36.5624 58.3502 39.0251V39.5086L57.8887 39.6003C46.424 41.6256 40.1723 52.3498 40.1723 57.2976C40.1723 62.2454 44.3708 66.48 49.538 66.48C55.5821 66.48 63.0559 61.3251 64.2555 46.8267L64.3017 46.2977H69.0769V39.601H64.2786V39.6003ZM58.0269 47.0332C57.1044 55.709 52.652 59.7596 49.9533 59.7596C48.7306 59.7596 47.0238 58.7469 47.0238 56.8602C47.0238 54.7432 50.1841 48.3223 57.2889 46.4125L58.1194 46.2053L58.0269 47.0339V47.0332Z" fill="#131313" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Cell 5: HIGHLIGHTS */}
            <div className="bento-cell highlights-cell">
              <div className="highlights-wrapper">
                <span className="highlight-item purple">
                  Synthesizing Human Vision with Technical Precision:
                </span>
                <div className="highlight-subrow">
                  <span className="highlight-item green">Editing</span>
                  <span className="highlight-item green">Direction</span>
                  <span className="highlight-item green">and</span>
                </div>
                <span className="highlight-item blue">
                  AI-Driven Media Production
                </span>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* About View Overlay (Flares up when activeTab is 'about') */}
      {activeTab === 'about' && (
        <div className="about-overlay">
          <div className="about-overlay-inner">
            <div className="about-title-container">
              <span className="about-subtitle">CREATIVE PROFILE</span>
              <h2 className="about-page-title name-value" style={{ margin: 0, display: 'inline-block' }}>About Me</h2>
            </div>
            
            {/* Main Content Card containing Image and Bio */}
            <div className="about-content-card">
              <div className="about-card-columns">
                <div className="about-image-column">
                  <div className="about-card-img-wrapper">
                    <img src={profileImg} alt="C Hashir" className="about-card-img" />
                  </div>
                  <div className="about-card-meta">
                    <span className="profile-tagline">Video Editor & Director</span>
                    <div className="profile-stats">
                      <div className="stat-item">
                        <span className="stat-num">4+ Years</span>
                        <span className="stat-lbl">Editing Exp</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-num">2+ Years</span>
                        <span className="stat-lbl">AI Filmmaking</span>
                      </div>
                    </div>
                    <button onClick={() => setActiveVideoUrl('/resume.pdf')} className="btn-explore" style={{ border: 'none', outline: 'none', display: 'block', marginTop: '15px', textAlign: 'center', width: '100%' }}>
                      VIEW RESUME
                    </button>
                  </div>
                </div>
                
                <div className="about-text-column">
                  <div className="about-card-header">
                    <div className="about-logo-wrapper">
                      <span className="about-logo-text">Hc</span>
                    </div>
                    <h3 className="about-card-name">C Hashir</h3>
                  </div>
                  
                  <div className="about-card-body">
                    {profile.aboutParagraphs.map((para, idx) => (
                      <p key={idx} className="about-card-para">{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Services Section */}
          <div className="services-section">
            <div className="services-overlay-inner">
              <div className="about-title-container" style={{ gridColumn: 'span 3', marginBottom: '30px' }}>
                <span className="about-subtitle">CREATIVE SOLUTIONS</span>
                <h2 className="about-page-title name-value" style={{ margin: 0, display: 'inline-block' }}>Services</h2>
                <p className="services-description" style={{ color: 'var(--text-secondary)', marginTop: '10px', fontSize: '16px', maxWidth: '600px', lineHeight: '1.6' }}>
                  High-end video post-production, directing, and AI workflows tailored to deliver stellar visual storytelling.
                </p>
              </div>
              <div className="services-grid">
                {services.map((service, idx) => {
                  const cardClass = service.name.toLowerCase().replace(/\s+/g, '-');
                  return (
                    <div 
                      key={idx} 
                      className={`service-card ${cardClass}`}
                      onClick={() => openModal(`Service Inquiry: ${service.name}`)}
                    >
                      <div className="service-card-header">
                        <div className="service-icon-box">
                          {getServiceIcon(service.name)}
                        </div>
                      </div>
                      <div className="service-card-body">
                        <h3 className="service-title">{service.name}</h3>
                        <span className="service-cat-label">PROFESSIONAL SERVICE</span>
                      </div>
                      <div className="service-card-footer">
                        <span className="service-action-text">INQUIRE NOW</span>
                        <svg viewBox="0 0 24 24" className="service-action-arrow" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Portfolio/Projects View Overlay (Flares up when activeTab is 'portfolio') */}
      {activeTab === 'portfolio' && (
        <div className="about-overlay">
          <div className="services-overlay-inner">
            <div className="about-title-container" style={{ gridColumn: 'span 3', marginBottom: '30px' }}>
              <span className="about-subtitle">CREATIVE PORTFOLIO</span>
              <h2 className="about-page-title name-value" style={{ margin: 0, display: 'inline-block' }}>Projects</h2>
              <p className="portfolio-description" style={{ color: 'var(--text-secondary)', marginTop: '10px', fontSize: '16px', maxWidth: '600px', lineHeight: '1.6' }}>
                Explore a curated showcase of professional video editing reels, cinematic directing work, and AI-driven media productions.
              </p>
            </div>
            
            <div className="portfolio-grid-container">
              <div className="portfolio-folders-grid">
                {projects.map((project, idx) => {
                  const cardClass = project.title.toLowerCase().replace(/\s+/g, '-');
                  return (
                    <div 
                      key={idx} 
                      className={`folder-card ${cardClass}`}
                      onClick={() => handleProjectClick(project.videoUrl || project.link)}
                    >
                      <div className="folder-card-header">
                        <div className="folder-icon-box">
                          {getProjectIcon(project.title)}
                        </div>
                      </div>
                      <div className="folder-card-body">
                        <h3 className="folder-title">{project.title}</h3>
                        <span className="folder-cat-label">{project.category}</span>
                      </div>
                      <div className="folder-card-footer">
                        <span className="folder-action-text">WATCH REEL</span>
                        <svg viewBox="0 0 24 24" className="folder-action-arrow" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}


      {/* Contact Form Modal */}
      <ContactModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        type={modalType}
        onSuccess={handleSuccess}
      />

      {/* Video Iframe Embed Modal */}
      {activeVideoUrl && (
        <div className="video-modal-overlay" onClick={() => setActiveVideoUrl(null)}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={() => setActiveVideoUrl(null)}>×</button>
            <div className={`iframe-container ${activeVideoUrl.endsWith('.mp4') ? 'native-video' : ''}`}>
              {activeVideoUrl.endsWith('.mp4') ? (
                <video 
                  src={activeVideoUrl} 
                  controls 
                  autoPlay 
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'contain' }} 
                />
              ) : (
                <iframe 
                  src={activeVideoUrl} 
                  title="Project Video" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; encrypted-media" 
                  allowFullScreen
                />
              )}
            </div>
          </div>
        </div>
      )}

      {/* Toast Alert */}
      <div className={`toast ${toastShow ? 'show' : ''}`}>
        {toastMessage}
      </div>
    </div>
  );
}

export default App;
