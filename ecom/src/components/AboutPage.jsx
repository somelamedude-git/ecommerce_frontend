import React from 'react';
import { Search, User, ShoppingBag, Heart, Star, Users, Sparkles, ArrowLeft, Menu,} from 'lucide-react';
import firstdesign from './public/first image.png';
import image from './public/image.png';
import ce from './public/clique-experience.png';

const styles = {
  container: {
    minHeight:'100vh', backgroundColor:'#000000', color:'#ffffff'},
  header: {
    backgroundColor:'#000000', borderBottom:'1px solid #374151'},
  headerContent: {
    maxWidth:'1280px', margin:'0 auto', padding:'0 16px', display:'flex',alignItems:'center', justifyContent:'space-between', height:'64px'},
  logo: {
    fontSize:'24px', fontWeight:'bold', color:'#ffffff'}, 
    nav: {
    display:'flex', justifyContent:'center', flex: 1},
  navLinks: {
    display:'flex', gap:'32px'},
  navLink: {
    color:'#d1d5db', textDecoration:'none', background:'none', border:'none', cursor:'pointer', fontSize:'16px', transition:'color 0.3s ease'},
  activeNavLink: {
    background:'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', 
    backgroundClip:'text', fontWeight:'500'},
  headerActions: {
    display:'flex', alignItems:'center', gap:'16px'},
  iconButton: {
    background:'none', border:'none', color:'#9ca3af', cursor:'pointer', transition:'color 0.3s ease', position:'relative'},
  cartBadge: {
    position:'absolute', top:'-8px', right:'-8px', background:'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)',
    color:'#000000', fontSize:'12px', borderRadius:'50%', width:'20px', height:'20px', display:'flex', alignItems:'center', justifyContent:'center',
    fontWeight:'bold'},
  authButton: {
    background:'none', border:'none', color:'#d1d5db', cursor:'pointer', fontSize:'16px', transition:'color 0.3s ease'},
  signUpButton: {
    background:'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)', color:'#000000', padding:'8px 16px', borderRadius:'8px',
    fontWeight:'500', border:'none', cursor:'pointer', transition:'opacity 0.3s ease'},
  mainContent: {
    maxWidth:'1280px', margin:'0 auto', padding:'32px 16px'},
  backButton: {
    display:'flex', alignItems:'center', gap:'8px', color:'#9ca3af', background:'none', border:'none', cursor:'pointer', fontSize:'16px',
    marginBottom:'32px', transition:'all 0.3s ease'},
  heroSection: {
    textAlign:'center', padding:'80px 0', background:'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.8))'},
  badge: {
    display:'inline-block', marginBottom:'24px', backgroundColor:'rgba(31, 41, 55, 0.8)', color:'#d1d5db', padding:'8px 16px', borderRadius:'9999px',
    fontSize:'14px', fontWeight:'500'},
  heroTitle: {
    fontSize:'60px', fontWeight:'bold', marginBottom:'24px'},
  heroTitleAccent: {
    background:'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text'},
  heroSubtitle: {
    fontSize:'20px', color:'#9ca3af', lineHeight:'1.6', maxWidth:'768px', margin:'0 auto'},
  section: {
    padding:'80px 0'},
  sectionGrid: {
    display:'grid', gridTemplateColumns:'1fr 1fr', gap:'64px', alignItems:'center'
  },
  sectionTitle: {
    fontSize:'36px', fontWeight:'bold',marginBottom:'24px'
  },
  sectionText: {
    color:'#9ca3af', marginBottom:'24px', lineHeight:'1.6'
  },
  primaryButton: {
    background:'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)', color:'#000000', padding:'12px 24px', borderRadius:'8px',
    fontWeight:'600', border:'none', cursor:'pointer', transition:'opacity 0.3s ease'
  },
  secondaryButton: {
    border:'2px solid hsl(45, 100%, 85%)', color:'hsl(45, 100%, 85%)', padding:'12px 24px', borderRadius:'8px', fontWeight:'600', background:'transparent',
    cursor:'pointer', transition:'all 0.3s ease'
  },
  image: {
    borderRadius:'8px', width:'100%', height:'auto', boxShadow:'0 25px 50px -12px rgba(0, 0, 0, 0.25)'
  },
  valuesSection: {
    backgroundColor:'#111827', padding:'80px 0'
  },
  valuesGrid: {
    display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(250px, 1fr))', gap:'32px', marginTop:'64px'
  },
  valueCard: {
    backgroundColor:'#1f2937',
    border:'1px solid #374151',
    padding:'24px',
    borderRadius:'12px',
    textAlign:'center',
    transition:'all 0.3s ease'
  },
  valueIcon: {
    width:'48px',
    height:'48px',
    background:'rgba(251, 191, 36, 0.1)',
    borderRadius:'50%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    margin:'0 auto 16px',
    color:'hsl(45, 100%, 85%)'
  },
  valueTitle: {
    fontSize:'18px',
    fontWeight:'600',
    marginBottom:'12px'
  },
  valueDescription: {
    color:'#9ca3af',
    fontSize:'14px',
    lineHeight:'1.6'
  },
  timelineSection: {
    padding:'80px 0'
  },
  timelineContainer: {
    maxWidth:'768px', margin:'0 auto', position:'relative'
  },
  timelineItem: {
    display:'flex', alignItems:'flex-start', gap:'24px', marginBottom:'32px'
  },
  timelineIcon: {
    width:'48px', height:'48px',
    background:'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)',
    borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center',
    color:'#000000',
    fontWeight:'bold',
    flexShrink: 0
  },
  timelineContent: {
    flex: 1, backgroundColor:'#111827', padding:'24px', borderRadius:'8px', border:'1px solid #374151'
  },
  timelineYear: {
    fontSize:'18px', fontWeight:'600',
    background:'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)', WebkitBackgroundClip:'text',
    WebkitTextFillColor:'transparent', backgroundClip:'text', marginBottom:'8px'
  },
  timelineEvent: {
    color:'#ffffff'
  },
  ctaSection: {
    padding:'80px 0',
    textAlign:'center',
    background:'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.8))'
  },
  ctaTitle: {
    fontSize:'36px', fontWeight:'bold', marginBottom:'24px'
  },
  ctaSubtitle: {
    color:'#9ca3af', marginBottom:'32px', fontSize:'18px'
  },
  ctaButtons: {
    display:'flex', gap:'16px', justifyContent:'center'
  },
  contactSection: {
    backgroundColor:'#000000', padding:'80px 0'
  },
  contactContainer: {
    maxWidth:'768px', margin:'0 auto', padding:'0 16px'
  },
  contactHeader: {
    textAlign:'center', marginBottom:'48px'
  },
  contactTitle: {
    fontSize:'36px', fontWeight:'bold', color:'#ffffff', marginBottom:'16px'
  },
  contactSubtitle: { color:'#9ca3af', fontSize:'18px'
  },
  contactGrid: {
    display:'grid', gridTemplateColumns:'1fr 1fr', gap:'48px'
  },
  contactInfo: {
    display:'flex',
    flexDirection:'column',
    gap:'32px'
  },
  contactInfoTitle: {
    fontSize:'20px',
    fontWeight:'600',
    color:'#ffffff',
    marginBottom:'24px'
  },
  contactItem: {
    display:'flex',
    alignItems:'center',
    gap:'12px'
  },
  contactIcon: {
    width:'40px',
    height:'40px',
    background:'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)',
    borderRadius:'50%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    fontSize:'16px',
    fontWeight:'600',
    color:'#000000'
  },
  contactDetails: {
    display:'flex',
    flexDirection:'column'
  },
  contactLabel: {
    color:'#9ca3af',
    fontSize:'14px'
  },
  contactValue: {
    color:'#ffffff'
  },
  form: {
    display:'flex',
    flexDirection:'column',
    gap:'24px'
  },
  formRow: {
    display:'grid',
    gridTemplateColumns:'1fr 1fr',
    gap:'16px'
  },
  formGroup: {
    display:'flex',
    flexDirection:'column'
  },
  label: {
    display:'block',
    fontSize:'14px',
    fontWeight:'500',
    color:'#d1d5db',
    marginBottom:'8px'
  },
  input: {
    width:'100%',
    backgroundColor:'#1f2937',
    border:'1px solid #374151',
    borderRadius:'8px',
    padding:'12px 16px',
    color:'#ffffff',
    fontSize:'16px',
    transition:'border-color 0.3s ease'
  },
  textarea: {
    width:'100%',
    backgroundColor:'#1f2937',
    border:'1px solid #374151',
    borderRadius:'8px',
    padding:'12px 16px',
    color:'#ffffff',
    fontSize:'16px',
    resize:'none',
    transition:'border-color 0.3s ease'
  },
  submitButton: {
    width:'100%',
    background:'linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)',
    color:'#000000',
    padding:'12px',
    borderRadius:'8px',
    fontWeight:'600',
    border:'none',
    cursor:'pointer',
    transition:'all 0.3s ease'
  }
};

function AboutPage({
  tolanding,
  tocart,
  toproducts,
  toprofile,
  onNavigateToWorkWithUs,
  loggedin,
  onmenubar,
  cartCount = 3,
}) {
  const values = [
    {
      icon: Heart,
      title:'Passion for Style',
      description:
        'Every piece we create comes from a deep love for fashion and an understanding of individual expression.',
    },
    {
      icon: Star,
      title:'Premium Quality',
      description:
        'We source the finest materials and work with skilled artisans to ensure every garment meets our exacting standards.',
    },
    {
      icon: Users,
      title:'Community First',
      description:
        'Our customers are at the heart of everything we do. Your style journey is our inspiration.',
    },
    {
      icon: Sparkles,
      title:'Innovation',
      description:
        'We constantly push boundaries, blending timeless elegance with contemporary trends.',
    },
  ];

  const milestones = [
    { year:'2020', event:'CLIQUE was founded with a vision to democratize high fashion'},
    { year:'2021', event:'Launched our first collection, gaining recognition in fashion circles'},
    { year:'2022', event:'Expanded globally, reaching customers in over 25 countries'},
    { year:'2023', event:'Opened flagship stores in major fashion capitals'},
    { year:'2024', event:'Introduced sustainable fashion initiatives'},
    { year:'2025', event:'Launching our most ambitious collection yet'},
  ];

  const handleContactSubmit = (e)=> {
    e.preventDefault();
    console.log('Contact form submitted');
  };

  return (
    <div style={styles.container}>
      {//header section}
      }
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.logo}>CLIQUE</div>

          <nav style={styles.nav} className="mobile-hidden">
            <div style={styles.navLinks}>
              <button 
                onClick={tolanding} 
                style={styles.navLink}
                onMouseEnter={(e)=> e.target.style.color='#ffffff'}
                onMouseLeave={(e)=> e.target.style.color='#d1d5db'}
              >
                Home
              </button>
              <button 
                onClick={toproducts} 
                style={styles.navLink}
                onMouseEnter={(e)=> e.target.style.color='#ffffff'}
                onMouseLeave={(e)=> e.target.style.color='#d1d5db'}
              >
                Products
              </button>
              <a href="#" style={styles.activeNavLink}>
                About Us
              </a>
              <button 
                onClick={tocart} 
                style={styles.navLink}
                onMouseEnter={(e)=> e.target.style.color='#ffffff'}
                onMouseLeave={(e)=> e.target.style.color='#d1d5db'}
              >
                Cart
              </button>
            </div>
          </nav>

          <div style={styles.headerActions}>
            <button style={styles.iconButton}>
              <Search size={20} />
            </button>
            <button onClick={toprofile} style={styles.iconButton}>
              <User size={20} />
            </button>
            <button onClick={tocart} style={styles.iconButton}>
              <ShoppingBag size={20} />
              <span style={styles.cartBadge}>{cartCount}</span>
            </button>
            {loggedin ? (
              <button onClick={onmenubar} style={styles.iconButton}>
                <Menu size={20} />
              </button>
            ) : (
              <>
                <button style={styles.authButton}>Login</button>
                <button style={styles.signUpButton}>Sign up</button>
              </>
            )}
          </div>
        </div>
      </header>

       //back
       
      <div style={styles.mainContent}>
        <button 
          onClick={tolanding}
          style={styles.backButton}
          onMouseEnter={(e)=> {
            e.target.style.background='linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)';
            e.target.style.webkitBackgroundClip='text';
            e.target.style.webkitTextFillColor='transparent';
            e.target.style.backgroundClip='text';
          }}
          onMouseLeave={(e)=> {
            e.target.style.background='none';
            e.target.style.webkitBackgroundClip='initial';
            e.target.style.webkitTextFillColor='initial';
            e.target.style.backgroundClip='initial';
            e.target.style.color='#9ca3af';
          }}
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </button>
      </div>
          //hero
       
      <section style={styles.heroSection}>
        <div style={{maxWidth:'768px', margin:'0 auto', padding:'0 16px'}}>
          <div style={styles.badge}>Our Story</div>
          <h1 style={styles.heroTitle}>
            Fashion is our <span style={styles.heroTitleAccent}>Language</span>
          </h1>
          <p style={styles.heroSubtitle}>
            CLIQUE was born from a simple belief: everyone deserves to express their unique style with confidence. 
            We're not just a fashion brand – we're a movement that celebrates individuality and empowers self-expression.
          </p>
        </div>
      </section>
          //story
       
      <section style={styles.section}>
        <div style={{maxWidth:'1280px', margin:'0 auto', padding:'0 16px'}}>
          <div style={styles.sectionGrid} className="mobile-flex-col">
            <div>
              <h2 style={styles.sectionTitle}>Where Dreams Meet Design</h2>
              <p style={styles.sectionText}>
                It all started in a small studio in 2020, where our founders shared a vision of making high-quality, 
                trend-setting fashion accessible to everyone. We believed that great style shouldn't be reserved for 
                the privileged few, it should be a form of self-expression available to all.
              </p>
              <p style={styles.sectionText}>
                From those humble beginnings, CLIQUE has grown into a global fashion destination, but our core values 
                remain unchanged: quality, creativity, and inclusivity guide every decision we make.
              </p>
              <button 
                onClick={toproducts}
                style={styles.primaryButton}
                onMouseEnter={(e)=> e.target.style.opacity='0.9'}
                onMouseLeave={(e)=> e.target.style.opacity='1'}
              >
                Explore Our Collections
              </button>
            </div>
            <div>
              <img 
                src={firstdesign}
                alt="Design process at CLIQUE" 
                style={styles.image}
              />
            </div>
          </div>
        </div>
      </section>
//values
       
      <section style={styles.valuesSection}>
        <div style={{maxWidth:'1280px', margin:'0 auto', padding:'0 16px'}}>
          <div style={{textAlign:'center', marginBottom:'64px'}}>
            <h2 style={styles.sectionTitle}>What Drives Us</h2>
            <p style={styles.sectionText}>
              Our values are the foundation of everything we create and every relationship we build
            </p>
          </div>
          <div style={styles.valuesGrid}>
            {values.map((value, index)=> (
              <div 
                key={index} 
                style={styles.valueCard}
                onMouseEnter={(e)=> {
                  e.currentTarget.style.transform='translateY(-4px)';
                  e.currentTarget.style.boxShadow='0 20px 25px -5px rgba(251, 191, 36, 0.1)';
                }}
                onMouseLeave={(e)=> {
                  e.currentTarget.style.transform='translateY(0)';
                  e.currentTarget.style.boxShadow='none';
                }}
              >
                <div style={styles.valueIcon}>
                  <value.icon size={24} />
                </div>
                <h3 style={styles.valueTitle}>{value.title}</h3>
                <p style={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
            //timeline
       
      <section style={styles.timelineSection}>
        <div style={{maxWidth:'1280px', margin:'0 auto', padding:'0 16px'}}>
          <div style={{textAlign:'center', marginBottom:'64px'}}>
            <h2 style={styles.sectionTitle}>Our Journey</h2>
            <p style={styles.sectionText}>
              From a small startup to a global fashion destination
            </p>
          </div>
          <div style={styles.timelineContainer} className="timeline-container">
            {milestones.map((milestone, index)=> (
              <div key={index} style={styles.timelineItem}>
                <div style={styles.timelineIcon}>
                  {milestone.year.slice(-2)}
                </div>
                <div style={styles.timelineContent}>
                  <h3 style={styles.timelineYear}>{milestone.year}</h3>
                  <p style={styles.timelineEvent}>{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={styles.valuesSection}>
        <div style={{maxWidth:'1280px', margin:'0 auto', padding:'0 16px'}}>
          <div style={styles.sectionGrid} className="mobile-flex-col">
            <div>
              <img 
                src={image} 
                alt="CLIQUE team" 
                style={styles.image}
              />
            </div>
            <div>
              <h2 style={styles.sectionTitle}>Meet the Visionaries</h2>
              <p style={styles.sectionText}>
                Our team brings together decades of experience in fashion design, retail, and technology. 
                We're designers, dreamers, and innovators who share a common goal: making fashion more 
                accessible and personal.
              </p>
              <p style={styles.sectionText}>
                From our creative directors who sketch the future of fashion to our customer service team 
                who ensure every interaction is exceptional, each member of CLIQUE plays a vital role in 
                bringing our vision to life.
              </p>
              <button 
                onClick={onNavigateToWorkWithUs}
                style={styles.secondaryButton}
                onMouseEnter={(e)=> {
                  e.target.style.background='linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)';
                  e.target.style.color='#000000';
                }}
                onMouseLeave={(e)=> {
                  e.target.style.background='transparent';
                  e.target.style.color='hsl(45, 100%, 85%)';
                }}
              >
                Join Our Team
              </button>
            </div>
          </div>
        </div>
      </section>
        //experience area
       
      <section style={styles.section}>
        <div style={{maxWidth:'1280px', margin:'0 auto', padding:'0 16px'}}>
          <div style={styles.sectionGrid} className="mobile-flex-col">
            <div>
              <h2 style={styles.sectionTitle}>The CLIQUE Experience</h2>
              <p style={styles.sectionText}>
                Shopping with CLIQUE is more than just buying clothes – it's about discovering your personal style 
                and expressing your unique identity. Whether you visit our flagship stores or shop online, we've 
                crafted every touchpoint to inspire and delight.
              </p>
              <p style={styles.sectionText}>
                Our personal stylists work with you to curate looks that reflect your personality, while our 
                seamless digital experience ensures that finding your perfect piece is effortless and enjoyable.
              </p>
              <button 
                onClick={toproducts}
                style={styles.primaryButton}
                onMouseEnter={(e)=> e.target.style.opacity='0.9'}
                onMouseLeave={(e)=> e.target.style.opacity='1'}
              >
                Start Shopping
              </button>
            </div>
            <div>
              <img 
                src={ce}
                alt="CLIQUE boutique interior" 
                style={styles.image}
              />
            </div>
          </div>
        </div>
      </section>
        //call to action (CTA)
       
      <section style={styles.ctaSection}>
        <div style={{maxWidth:'768px', margin:'0 auto', padding:'0 16px'}}>
          <h2 style={styles.ctaTitle}>
            Ready to Make it <span style={styles.heroTitleAccent}>Worth the While?</span>
          </h2>
          <p style={styles.ctaSubtitle}>
            Join thousands of fashion enthusiasts who've discovered their signature style with CLIQUE
          </p>
          <div style={styles.ctaButtons} className="mobile-flex-col">
            <button
              onClick={toproducts}
              style={styles.primaryButton}
              onMouseEnter={(e)=> e.target.style.opacity='0.9'}
              onMouseLeave={(e)=> e.target.style.opacity='1'}
            >
              Shop New Collection
            </button>
            <button
              onClick={onNavigateToWorkWithUs}
              style={styles.secondaryButton}
              onMouseEnter={(e)=> {
                e.target.style.background='linear-gradient(135deg, hsl(45, 100%, 85%) 0%, hsl(35, 90%, 68%) 100%)';
                e.target.style.color='#000000';
              }}
              onMouseLeave={(e)=> {
                e.target.style.background='transparent';
                e.target.style.color='hsl(45, 100%, 85%)';
              }}
            >
              Work With Us
            </button>
          </div>
        </div>
      </section>
        //contact us
       
      <section style={styles.contactSection}>
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
                <div style={{display:'flex', flexDirection:'column', gap:'16px'}}>
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

            <div>
              <form style={styles.form} onSubmit={handleContactSubmit}>
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
                      onFocus={(e)=> e.target.style.borderColor='hsl(45, 100%, 85%)'}
                      onBlur={(e)=> e.target.style.borderColor='#374151'}
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
                      onFocus={(e)=> e.target.style.borderColor='hsl(45, 100%, 85%)'}
                      onBlur={(e)=> e.target.style.borderColor='#374151'}
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
                    onFocus={(e)=> e.target.style.borderColor='hsl(45, 100%, 85%)'}
                    onBlur={(e)=> e.target.style.borderColor='#374151'}
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
                    placeholder="Tell us how we can help you."
                    onFocus={(e)=> e.target.style.borderColor='hsl(45, 100%, 85%)'}
                    onBlur={(e)=> e.target.style.borderColor='#374151'}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  style={styles.submitButton}
                  onMouseEnter={(e)=> {
                    e.target.style.opacity='0.9';
                    e.target.style.transform='scale(1.05)';
                  }}
                  onMouseLeave={(e)=> {
                    e.target.style.opacity='1';
                    e.target.style.transform='scale(1)';
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

export default AboutPage;