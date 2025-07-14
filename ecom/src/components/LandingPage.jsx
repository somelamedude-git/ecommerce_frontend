import React from 'react';
import { Search, User, ShoppingBag, Menu } from 'lucide-react';
import logo from './public/logo.png';

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#000000',
    color: '#ffffff'
  },
  header: {
    backgroundColor: '#000000',
    borderBottom: '1px solid #374151',
    position: 'sticky',
    top: 0,
    zIndex: 50
  },
  headerContent: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '64px'
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  logoImage: {
    width: '32px',
    height: '32px',
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1
  },
  navLinks: {
    display: 'flex',
    gap: '32px'
  },
  navLink: {
    color: '#d1d5db',
    textDecoration: 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'color 0.3s ease'
  },
  navLinkHover: {
    color: '#ffffff'
  },
  headerActions: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  },
  iconButton: {
    background: 'none',
    border: 'none',
    color: '#9ca3af',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
    position: 'relative'
  },
  cartBadge: {
    position: 'absolute',
    top: '-8px',
    right: '-8px',
    background: 'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)',
    color: '#000000',
    fontSize: '12px',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold'
  },
  authButton: {
    background: 'none',
    border: 'none',
    color: '#d1d5db',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'color 0.3s ease'
  },
  signUpButton: {
    background: 'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)',
    color: '#000000',
    padding: '8px 16px',
    borderRadius: '8px',
    fontWeight: '500',
    border: 'none',
    cursor: 'pointer',
    transition: 'opacity 0.3s ease'
  },
  hero: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  heroOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.8))'
  },
  heroContent: {
    position: 'relative',
    zIndex: 10,
    textAlign: 'center',
    padding: '0 16px',
    maxWidth: '1152px',
    margin: '0 auto'
  },
  badge: {
    display: 'inline-block',
    marginBottom: '32px',
    backgroundColor: 'rgba(31, 41, 55, 0.8)',
    color: '#d1d5db',
    padding: '12px 24px',
    borderRadius: '9999px',
    fontSize: '14px',
    fontWeight: '500',
    border: '1px solid #374151',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  mainHeadline: {
    fontSize: '80px',
    fontWeight: 'bold',
    lineHeight: '1.1',
    marginBottom: '32px'
  },
  headlineText: {
    color: '#ffffff',
    display: 'block',
    marginBottom: '8px'
  },
  typingText: {
    background: 'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    display: 'block'
  },
  subtitle: {
    fontSize: '16px',
    color: '#6b7280',
    marginBottom: '48px',
    maxWidth: '768px',
    margin: '0 auto 48px auto',
    lineHeight: '1.6',
    opacity: 0.6
  },
  ctaButtons: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px'
  },
  primaryButton: {
    background: 'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)',
    color: '#000000',
    padding: '16px 32px',
    borderRadius: '8px',
    fontSize: '18px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
  },
  secondaryButton: {
    border: '2px solid #4b5563',
    color: '#ffffff',
    padding: '16px 32px',
    borderRadius: '8px',
    fontSize: '18px',
    fontWeight: '600',
    background: 'transparent',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  contactSection: {
    backgroundColor: '#000000',
    padding: '80px 0'
  },
  contactContainer: {
    maxWidth: '768px',
    margin: '0 auto',
    padding: '0 16px'
  },
  contactHeader: {
    textAlign: 'center',
    marginBottom: '48px'
  },
  contactTitle: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: '16px'
  },
  contactSubtitle: {
    color: '#9ca3af',
    fontSize: '18px'
  },
  contactGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '48px'
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  },
  contactInfoTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: '24px'
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  contactIcon: {
    width: '40px',
    height: '40px',
    background: 'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    fontWeight: '600',
    color: '#000000'
  },
  contactDetails: {
    display: 'flex',
    flexDirection: 'column'
  },
  contactLabel: {
    color: '#9ca3af',
    fontSize: '14px'
  },
  contactValue: {
    color: '#ffffff'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column'
  },
  label: {
    display: 'block',
    fontSize: '14px',
    fontWeight: '500',
    color: '#d1d5db',
    marginBottom: '8px'
  },
  input: {
    width: '100%',
    backgroundColor: '#1f2937',
    border: '1px solid #374151',
    borderRadius: '8px',
    padding: '12px 16px',
    color: '#ffffff',
    fontSize: '16px',
    transition: 'border-color 0.3s ease'
  },
  textarea: {
    width: '100%',
    backgroundColor: '#1f2937',
    border: '1px solid #374151',
    borderRadius: '8px',
    padding: '12px 16px',
    color: '#ffffff',
    fontSize: '16px',
    resize: 'none',
    transition: 'border-color 0.3s ease'
  },
  submitButton: {
    width: '100%',
    background: 'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)',
    color: '#000000',
    padding: '12px',
    borderRadius: '8px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  }
};


const responsiveStyles = {
  '@media (max-width: 768px)': {
    nav: { display: 'none' },
    mainHeadline: { fontSize: '48px' },
    ctaButtons: { flexDirection: 'column' },
    contactGrid: { gridTemplateColumns: '1fr' },
    formRow: { gridTemplateColumns: '1fr' }
  },
  '@media (min-width: 640px)': {
    ctaButtons: { flexDirection: 'row' }
  }
};

function LandingPage({ onNavigateToCart, onNavigateToAbout, onNavigateToProducts, onNavigateToProfile, onNavigateToLogin, onNavigateToSignup, isLoggedIn, onToggleMenu }) {
  const [hoveredButton, setHoveredButton] = React.useState(null);

  return (
    <div style={styles.container}>

        //header
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.logo}>
            <img 
              src={logo} 
              alt="CLIQUE Logo" 
              style={styles.logoImage}
            />
            CLIQUE
          </div>
          
          <nav style={styles.nav} className="mobile-hidden">
            <div style={styles.navLinks}>
              <a href="#" style={styles.navLink}>Home</a>
              <button 
                onClick={onNavigateToProducts}
                style={styles.navLink}
                onMouseEnter={(e) => e.target.style.color = styles.navLinkHover.color}
                onMouseLeave={(e) => e.target.style.color = styles.navLink.color}
              >
                Products
              </button>
              <button 
                onClick={onNavigateToAbout}
                style={styles.navLink}
                onMouseEnter={(e) => e.target.style.color = styles.navLinkHover.color}
                onMouseLeave={(e) => e.target.style.color = styles.navLink.color}
              >
                About Us
              </button>
              <button 
                onClick={onNavigateToCart}
                style={styles.navLink}
                onMouseEnter={(e) => e.target.style.color = styles.navLinkHover.color}
                onMouseLeave={(e) => e.target.style.color = styles.navLink.color}
              >
                Cart
              </button>
            </div>
          </nav>
          
          <div style={styles.headerActions}>
            <button style={styles.iconButton}>
              <Search size={20} />
            </button>
            <button 
              onClick={onNavigateToProfile}
              style={styles.iconButton}
            >
              <User size={20} />
            </button>
            <button 
              onClick={onNavigateToCart}
              style={styles.iconButton}
            >
              <ShoppingBag size={20} />
              <span style={styles.cartBadge}>3</span>
            </button>
            {isLoggedIn ? (
              <button 
                onClick={onToggleMenu}
                style={styles.iconButton}
              >
                <Menu size={20} />
              </button>
            ) : (
              <>
                <button 
                  onClick={onNavigateToLogin}
                  style={styles.authButton}
                >
                  Login
                </button>
                <button 
                  onClick={onNavigateToSignup}
                  style={styles.signUpButton}
                  onMouseEnter={(e) => e.target.style.opacity = '0.9'}
                  onMouseLeave={(e) => e.target.style.opacity = '1'}
                >
                  Sign up
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        
        <div style={styles.heroContent}>
          <div style={styles.badge}>
            Latest Collection 2025
          </div>

          <h1 style={styles.mainHeadline}>
            <span style={styles.headlineText}>People are going to Stare -</span>
            <span style={{...styles.typingText}} className="typing-animation">Make it worth the While</span>
          </h1>

          <p style={styles.subtitle}>
            Unveiling a fashion destination where trends blend seamlessly with your individual 
            style aspirations. Discover today!
          </p>

          <div style={styles.ctaButtons} className="mobile-flex-col desktop-flex-row">
            <button 
              onClick={onNavigateToProducts}
              style={styles.primaryButton}
              onMouseEnter={(e) => {
                e.target.style.opacity = '0.9';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.opacity = '1';
                e.target.style.transform = 'scale(1)';
              }}
            >
              New collection
            </button>
            <button 
              onClick={onNavigateToCart}
              style={styles.secondaryButton}
              onMouseEnter={(e) => {
                e.target.style.borderColor = 'rgba(251, 191, 36, 0.8)';
                e.target.style.background = 'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)';
                e.target.style.color = '#000000';
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = '#4b5563';
                e.target.style.background = 'transparent';
                e.target.style.color = '#ffffff';
              }}
            >
              View Cart
            </button>
          </div>
        </div>
      </main>

      {/* Contact Section */}
      <section id="contact" style={styles.contactSection}>
        <div style={styles.contactContainer}>
          <div style={styles.contactHeader}>
            <h2 style={styles.contactTitle}>Get in Touch</h2>
            <p style={styles.contactSubtitle}>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          </div>

          <div style={styles.contactGrid} className="mobile-flex-col">
            {/* Contact Info */}
            <div style={styles.contactInfo}>
              <div>
                <h3 style={styles.contactInfoTitle}>Contact Information</h3>
                <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
                  <div style={styles.contactItem}>
                    <div style={styles.contactIcon}>📧</div>
                    <div style={styles.contactDetails}>
                      <p style={styles.contactLabel}>Email</p>
                      <p style={styles.contactValue}>blahblah@clique.com</p>
                    </div>
                  </div>
                  <div style={styles.contactItem}>
                    <div style={styles.contactIcon}>📞</div>
                    <div style={styles.contactDetails}>
                      <p style={styles.contactLabel}>Phone</p>
                      <p style={styles.contactValue}>+91 4778349067</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form style={styles.form}>
                <div style={styles.formRow} className="mobile-flex-col">
                  <div style={styles.formGroup}>
                    <label htmlFor="firstName" style={styles.label}>
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      style={styles.input}
                      placeholder="Your first name"
                      onFocus={(e) => e.target.style.borderColor = 'hsl(45, 100%, 85%)'}
                      onBlur={(e) => e.target.style.borderColor = '#374151'}
                    />
                  </div>
                  <div style={styles.formGroup}>
                    <label htmlFor="lastName" style={styles.label}>
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      style={styles.input}
                      placeholder="Your last name"
                      onFocus={(e) => e.target.style.borderColor = 'hsl(45, 100%, 85%)'}
                      onBlur={(e) => e.target.style.borderColor = '#374151'}
                    />
                  </div>
                </div>
                
                <div style={styles.formGroup}>
                  <label htmlFor="email" style={styles.label}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    style={styles.input}
                    placeholder="your.email@example.com"
                    onFocus={(e) => e.target.style.borderColor = 'hsl(45, 100%, 85%)'}
                    onBlur={(e) => e.target.style.borderColor = '#374151'}
                  />
                </div>
                
                <div style={styles.formGroup}>
                  <label htmlFor="message" style={styles.label}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    style={styles.textarea}
                    placeholder="Tell us how we can help you..."
                    onFocus={(e) => e.target.style.borderColor = 'hsl(45, 100%, 85%)'}
                    onBlur={(e) => e.target.style.borderColor = '#374151'}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  style={styles.submitButton}
                  onMouseEnter={(e) => {
                    e.target.style.opacity = '0.9';
                    e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.opacity = '1';
                    e.target.style.transform = 'scale(1)';
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;