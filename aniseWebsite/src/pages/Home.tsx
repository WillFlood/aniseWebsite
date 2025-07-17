import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Features from './Features';
import aboutIcon from '../assets/about.svg';
import aboutStyles from '../styles/About.module.css';
import Button from '../components/Button';
import headerStyles from '../styles/Header.module.css';
import startIcon from '../assets/start.svg';
import { Parallax } from 'react-scroll-parallax';
import faqIcon from '../assets/faq.svg';
import { useInView } from 'react-intersection-observer';

// FadeInSection component for fade-in effect
const FadeInSection: React.FC<{ children: React.ReactNode; className?: string; style?: React.CSSProperties; id?: string }> = ({ children, className, style, id }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <section
      ref={ref}
      id={id}
      className={className + ' fade-in-section' + (inView ? ' visible' : '')}
      style={style}
    >
      {children}
    </section>
  );
};

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showEnquiriesModal, setShowEnquiriesModal] = useState(false);
  const [enquiryEmail, setEnquiryEmail] = useState('');
  const [enquiryMandate, setEnquiryMandate] = useState('');
  const [enquiryReason, setEnquiryReason] = useState('');
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDownloadClick = () => {
    setShowModal(true);
  };
  const handleModalClose = () => {
    setShowModal(false);
    setEmail('');
    setSubmitted(false);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async (replace with real API call)
    await new Promise(res => setTimeout(res, 1200));
    setSubmitted(true);
    setLoading(false);
    // Here you would send the email to your backend or service
  };
  const handleEnquiriesClick = () => {
    setShowEnquiriesModal(true);
  };
  const handleEnquiriesModalClose = () => {
    setShowEnquiriesModal(false);
    setEnquiryEmail('');
    setEnquiryMandate('');
    setEnquiryReason('');
    setEnquirySubmitted(false);
  };
  const handleEnquiriesSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnquirySubmitted(true);
    // Here you would send the enquiry to your backend or service
  };

  return (
    <>
      <Header onDownloadClick={handleDownloadClick} onEnquiriesClick={handleEnquiriesClick} />
      <Hero onDownloadClick={handleDownloadClick} />
      <FadeInSection id="about" className={aboutStyles.aboutSection} style={{ paddingTop: '2rem' }}>
        <div className={aboutStyles.aboutDiamondWrapper}>
          <div className={aboutStyles.aboutImageContainer}>
            <img src={aboutIcon} alt="About Illustration" className={aboutStyles.aboutImage} style={{ width: '520px', height: '520px' }} />
          </div>
          <div className={aboutStyles.aboutMissionBlock}>
            <div className={aboutStyles.aboutBlockHeading}>Our Mission</div>
            Our mission is to empower anyone—groups, communities, or organisations—to easily create, govern, and manage decentralised autonomous organisations (DAOs) for any purpose. We believe in transparent, inclusive, and democratic governance, enabling people to collaborate and make impactful decisions together, all on the blockchain.
          </div>
          <div className={aboutStyles.aboutWhatBlock}>
            <div className={aboutStyles.aboutBlockHeading}>What We Do...</div>
            <ul style={{ textAlign: 'left', paddingLeft: '1.2em', margin: 0 }}>
              <li><b>DAO Creation Made Easy:</b> Launch a DAO in minutes using our intuitive templates.</li>
              <li><b>Mandate-Driven Governance:</b> Every DAO is built around a clear purpose and transparent rules.</li>
              <li><b>Inclusive Decision-Making:</b> <b>Voting</b> and <b>proposals</b> are open to all members, ensuring every voice is heard.</li>
              <li><b>On-Chain Transparency:</b> All actions and treasury movements are recorded on the blockchain for full accountability.</li>
              <li><b>Consultancy & Support:</b> Get expert help, training, and research to maximise your DAO’s impact.</li>
            </ul>
          </div>
          <div className={aboutStyles.aboutExamplesBlock}>
            <div className={aboutStyles.aboutBlockHeading}>DAO Examples</div>
            <b>Charity DAOs:</b> Pool resources and make collective decisions on donations and impact.<br />
            <b>Insurance DAOs:</b> Create decentralised mutual insurance groups, where members vote on claims and policies.<br />
            <b>Company Governance:</b> Manage a company’s treasury and decision-making with dispersed stakeholders.<br />
            <b>Research & Community Projects:</b> Fund and govern open-source, academic, or local initiatives.
          </div>
          <div className={aboutStyles.aboutDecentralisedBlock}>
            <div className={aboutStyles.aboutBlockHeading}>Decentralised & Transparent</div>
            DAOs on Anise are <b>decentralised</b>—no single person or entity controls the group. All actions are <b>transparent</b> and recorded on the blockchain, ensuring trust and inclusion for every member.<br /><br />
            <b>Why does this matter?</b><br />
            <ul style={{ textAlign: 'left', paddingLeft: '1.2em', margin: 0 }}>
              <li><b>Security:</b> Funds and decisions are protected by smart contracts, not a central authority.</li>
              <li><b>Resilience:</b> The organisation continues to operate even if individual members leave.</li>
              <li><b>Global Access:</b> Anyone, anywhere, can participate and benefit from a DAO.</li>
              <li><b>Community Ownership:</b> Members have real power and responsibility in shaping the future of their group.</li>
            </ul>
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <Features />
      </FadeInSection>
      <FadeInSection>
        <section id="faq" style={{ width: '100%', textAlign: 'center', margin: '4rem 0 0 0', padding: 0, scrollMarginTop: '100px', background: 'linear-gradient(90deg, #f7f3ff 0%, #e0e7ff 100%)', borderRadius: '2rem', boxShadow: '0 4px 24px rgba(59,33,119,0.06)', paddingBottom: '3rem' }}>
          <img src={faqIcon} alt="FAQ Icon" style={{ width: 180, margin: '2.5rem auto 2rem auto', display: 'block', filter: 'drop-shadow(0 8px 32px #7c4dff88)' }} />
          <h2 style={{ fontSize: '3.2rem', color: 'var(--color-primary)', fontWeight: 900, margin: '0 0 2.5rem 0', letterSpacing: '-0.02em' }}>
            FAQs
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
              gap: '3rem',
              justifyContent: 'center',
              maxWidth: 1000,
              margin: '0 auto',
              padding: '0 1rem',
            }}
          >
            <div style={{ background: '#fff', borderRadius: 28, boxShadow: '0 6px 32px rgba(59,33,119,0.10)', padding: '3rem 2rem 2.5rem 2rem', minHeight: 210, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', textAlign: 'left' }}>
              <strong style={{ fontSize: '1.55rem', color: 'var(--color-primary)', marginBottom: '1.1rem' }}>What is Anise?</strong>
              <p style={{ color: 'var(--color-secondary)', fontSize: '1.22rem', margin: 0 }}>Anise is a platform for creating, governing, and managing decentralised autonomous organisations (DAOs) with ease and transparency.</p>
            </div>
            <div style={{ background: '#fff', borderRadius: 28, boxShadow: '0 6px 32px rgba(59,33,119,0.10)', padding: '3rem 2rem 2.5rem 2rem', minHeight: 210, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', textAlign: 'left' }}>
              <strong style={{ fontSize: '1.55rem', color: 'var(--color-primary)', marginBottom: '1.1rem' }}>Who can use Anise?</strong>
              <p style={{ color: 'var(--color-secondary)', fontSize: '1.22rem', margin: 0 }}>Anyone—groups, communities, or organisations—can use Anise to collaborate and make impactful decisions together.</p>
            </div>
            <div style={{ background: '#fff', borderRadius: 28, boxShadow: '0 6px 32px rgba(59,33,119,0.10)', padding: '3rem 2rem 2.5rem 2rem', minHeight: 210, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', textAlign: 'left' }}>
              <strong style={{ fontSize: '1.55rem', color: 'var(--color-primary)', marginBottom: '1.1rem' }}>Is Anise open source?</strong>
              <p style={{ color: 'var(--color-secondary)', fontSize: '1.22rem', margin: 0 }}>Parts of Anise will be open source, and we encourage community contributions and transparency.</p>
            </div>
            <div style={{ background: '#fff', borderRadius: 28, boxShadow: '0 6px 32px rgba(59,33,119,0.10)', padding: '3rem 2rem 2.5rem 2rem', minHeight: 210, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', textAlign: 'left' }}>
              <strong style={{ fontSize: '1.55rem', color: 'var(--color-primary)', marginBottom: '1.1rem' }}>How much does it cost?</strong>
              <p style={{ color: 'var(--color-secondary)', fontSize: '1.22rem', margin: 0 }}>It doesn’t cost a thing to download. You pay however much you want. This all benefits the users! There will be a small admin fee in places though.</p>
            </div>
            <div style={{ background: '#fff', borderRadius: 28, boxShadow: '0 6px 32px rgba(59,33,119,0.10)', padding: '3.5rem 2.5rem 3rem 2.5rem', minHeight: 230, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', gridColumn: '1 / -1' }}>
              <strong style={{ fontSize: '1.7rem', color: 'var(--color-primary)', marginBottom: '1.2rem' }}>What are charity Anises?</strong>
              <p style={{ color: 'var(--color-secondary)', fontSize: '1.28rem', margin: 0, maxWidth: 600 }}>Anise does not take profit from charity Anises, only fees to keep the app running. 100% of donations go to the intended causes, minus minimal admin costs.</p>
            </div>
          </div>
        </section>
      </FadeInSection>
      <FadeInSection>
        <section style={{ width: '100%', textAlign: 'center', margin: '4rem 0 0 0', padding: 0 }}>
          <h2 style={{ fontSize: '2.2rem', color: 'var(--color-primary)', fontWeight: 800, margin: '0 0 1.5rem 0', letterSpacing: '-0.02em' }}>
            So what now..?
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap', flexDirection: 'row' }}>
            <Parallax speed={-10}>
              <img src={startIcon} alt="Start" style={{ width: 600, height: 600 }} />
            </Parallax>
            <div style={{ textAlign: 'left', maxWidth: 500 }}>
              <h3 style={{ fontSize: '2.2rem', color: 'var(--color-accent)', fontWeight: 700, margin: 0 }}>
                ...Begin and try now!
              </h3>
              <p style={{ margin: '1.5rem 0 0 0', fontSize: '1.45rem', color: 'var(--color-primary)', fontWeight: 500, lineHeight: 1.5 }}>
                Whether it's joining a group which tailors to your needs or creating your own anise. Whether you want to donate to a charity anise or make a private group with your friends. Your journey starts here.
              </p>
            </div>
          </div>
        </section>
      </FadeInSection>
      <FadeInSection id="resources">
        <section style={{ maxWidth: 700, margin: '4rem auto 0 auto', padding: '2rem 0', textAlign: 'left' }}>
          <h1 style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '1rem', textAlign: 'center' }}>DAO Resources</h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', textAlign: 'center' }}>
            Learn about DAOs, how they work, and how you can use them to create micro-entities for service provision and governance. Here are some of the best open source resources to get started:
          </p>
          <ol style={{ paddingLeft: '1.2rem' }}>
            {[
              {
                title: 'Ethereum.org: DAOs',
                description: 'A comprehensive introduction to DAOs, how they work, and why they matter.',
                url: 'https://ethereum.org/en/dao/'
              },
              {
                title: 'Aragon: What is a DAO?',
                description: 'Learn about DAOs, governance, and how to create your own with Aragon.',
                url: 'https://aragon.org/dao'
              },
              {
                title: 'DAOhaus: Build a DAO',
                description: 'A platform and resource hub for building and managing DAOs with open source tools.',
                url: 'https://daohaus.club/'
              },
              {
                title: 'DAOstack Academy',
                description: 'Educational resources and guides for building and participating in DAOs.',
                url: 'https://daostack.io/academy/'
              },
              {
                title: 'BanklessDAO: DAO Education Hub',
                description: 'A community-driven hub with guides, articles, and resources for learning about DAOs and decentralized governance.',
                url: 'https://bankless.community/dao-education-hub'
              }
            ].map((res, idx) => (
              <li key={idx} style={{ marginBottom: '1.5rem' }}>
                <a href={res.url} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 700, color: 'var(--color-accent)', fontSize: '1.15rem' }}>{res.title}</a>
                <div style={{ fontSize: '1rem', color: 'var(--color-primary)', marginTop: '0.3rem' }}>{res.description}</div>
              </li>
            ))}
          </ol>
        </section>
      </FadeInSection>
      <Footer />
      {showModal && (
        <div className={headerStyles.modalOverlay} onClick={handleModalClose}>
          <div
            className={headerStyles.modal}
            onClick={e => e.stopPropagation()}
            style={{ background: '#1f142c', color: '#fff', maxWidth: '540px', minHeight: '420px', fontSize: '1.15rem', padding: '3.5rem 2.5rem 2.5rem 2.5rem' }}
          >
            <button className={headerStyles.modalClose} onClick={handleModalClose}>&times;</button>
            <h2 style={{ color: '#fff', fontSize: '2.1rem', fontWeight: 800, marginBottom: '1.1rem', marginTop: '0.5rem' }}>
              Sign up for beta and regular updates!
            </h2>
            <div style={{ color: '#b388ff', fontWeight: 600, marginBottom: '0.7rem', fontSize: '1.08rem' }}>
              Get a reward when the app fully releases!
            </div>
            <div style={{ color: '#e0cfff', fontSize: '1.05rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>
              Be the first to experience collaborative, democratic organizing.<br />
              Sign up for our beta and get notified when we launch!
            </div>
            {submitted ? (
              <div className={headerStyles.modalSuccess} style={{ color: '#b388ff', fontSize: '1.2rem' }}>
                Thank you for joining! We'll keep you updated.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={headerStyles.modalForm}>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className={headerStyles.modalInput}
                  style={{ background: '#2b1a44', color: '#fff', border: '1.5px solid #b388ff', fontSize: '1.1rem' }}
                />
                {loading && (
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="gear-spinner"
                    style={{ display: 'block', margin: '0.5rem auto' }}
                  >
                    <g>
                      <circle cx="22" cy="22" r="18" stroke="#7c4dff" strokeWidth="4" fill="none" />
                      <path
                        d="M22 7V2M22 42v-5M37 22h5M2 22h5M31.14 12.86l3.24-3.24M8.62 35.38l3.24-3.24M31.14 31.14l3.24 3.24M8.62 8.62l3.24 3.24"
                        stroke="#7c4dff"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </g>
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 22 22"
                      to="360 22 22"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  </svg>
                )}
                <Button type="submit" style={{ background: '#7c4dff', color: '#fff', fontWeight: 700, fontSize: '1.1rem', padding: '0.9rem 0' }} disabled={loading}>
                  {loading ? 'Joining...' : 'Join Waitlist'}
                </Button>
              </form>
            )}
          </div>
        </div>
      )}
      {showEnquiriesModal && (
        <div className={headerStyles.modalOverlay} onClick={handleEnquiriesModalClose}>
          <div
            className={headerStyles.modal}
            onClick={e => e.stopPropagation()}
            style={{ background: '#1f142c', color: '#fff', maxWidth: '600px', minHeight: '480px', fontSize: '1.15rem', padding: '3.5rem 2.5rem 2.5rem 2.5rem', borderRadius: '20px', boxShadow: '0 8px 32px rgba(123,90,224,0.10)' }}
          >
            <button className={headerStyles.modalClose} onClick={handleEnquiriesModalClose}>&times;</button>
            <h2 style={{ color: '#fff', fontSize: '2.1rem', fontWeight: 800, marginBottom: '1.1rem', marginTop: '0.5rem' }}>
              Enquiries: Customised DAO Consultancy
            </h2>
            <div style={{ color: '#b388ff', fontWeight: 600, marginBottom: '0.7rem', fontSize: '1.08rem' }}>
              If you would like your own Customised DAO, that might be possible. Fill out the enquiry form here and we will get back to you shortly!
            </div>
            {enquirySubmitted ? (
              <div className={headerStyles.modalSuccess} style={{ color: '#b388ff', fontSize: '1.2rem' }}>
                Thank you for your enquiry! We'll get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleEnquiriesSubmit} className={headerStyles.modalForm}>
                <input
                  type="email"
                  placeholder="Email of Creator"
                  value={enquiryEmail}
                  onChange={e => setEnquiryEmail(e.target.value)}
                  required
                  className={headerStyles.modalInput}
                  style={{ background: 'rgba(123,90,224,0.08)', color: '#fff', border: 'none', fontSize: '1.1rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(123,90,224,0.07)', padding: '1rem 1.2rem', marginBottom: '0.5rem' }}
                />
                <input
                  type="text"
                  placeholder="Mandate"
                  value={enquiryMandate}
                  onChange={e => setEnquiryMandate(e.target.value)}
                  required
                  className={headerStyles.modalInput}
                  style={{ background: 'rgba(123,90,224,0.08)', color: '#fff', border: 'none', fontSize: '1.1rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(123,90,224,0.07)', padding: '1rem 1.2rem', marginBottom: '0.5rem' }}
                />
                <textarea
                  placeholder="Why do you want this anise?"
                  value={enquiryReason}
                  onChange={e => setEnquiryReason(e.target.value)}
                  required
                  className={headerStyles.modalInput}
                  style={{ background: 'rgba(123,90,224,0.08)', color: '#fff', border: 'none', fontSize: '1.1rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(123,90,224,0.07)', padding: '1rem 1.2rem', minHeight: '90px', resize: 'vertical', marginBottom: '0.5rem' }}
                />
                <Button type="submit" style={{ background: 'linear-gradient(90deg, #b388ff 0%, #7b5ae0 100%)', color: '#fff', fontWeight: 700, fontSize: '1.1rem', padding: '0.9rem 0', border: 'none', borderRadius: '12px', boxShadow: '0 2px 12px rgba(123,90,224,0.13)', marginTop: '0.7rem', letterSpacing: '0.01em' }}>Submit Enquiry</Button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Home; 