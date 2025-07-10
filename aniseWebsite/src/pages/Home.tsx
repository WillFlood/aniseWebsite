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

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleDownloadClick = () => {
    setShowModal(true);
  };
  const handleModalClose = () => {
    setShowModal(false);
    setEmail('');
    setSubmitted(false);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the email to your backend or service
  };

  return (
    <>
      <Header onDownloadClick={handleDownloadClick} />
      <Hero onDownloadClick={handleDownloadClick} />
      <section id="about" className={aboutStyles.aboutSection} style={{ paddingTop: '2rem' }}>
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
      </section>
      <Features />
      <section id="faq" style={{ width: '100%', textAlign: 'center', margin: '4rem 0 0 0', padding: 0, scrollMarginTop: '100px' }}>
        <h2 style={{ fontSize: '2.7rem', color: 'var(--color-primary)', fontWeight: 800, margin: '0 0 2rem 0', letterSpacing: '-0.02em' }}>
          FAQs
        </h2>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          justifyContent: 'center',
          maxWidth: 1200,
          margin: '0 auto',
        }}>
          <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(59,33,119,0.06)', padding: '2rem', maxWidth: 350, minWidth: 260, flex: '1 1 300px', textAlign: 'left' }}>
            <strong>What is Anise?</strong>
            <p>Anise is a platform for creating, governing, and managing decentralised autonomous organisations (DAOs) with ease and transparency.</p>
          </div>
          <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(59,33,119,0.06)', padding: '2rem', maxWidth: 350, minWidth: 260, flex: '1 1 300px', textAlign: 'left' }}>
            <strong>Who can use Anise?</strong>
            <p>Anyone—groups, communities, or organisations—can use Anise to collaborate and make impactful decisions together.</p>
          </div>
          <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(59,33,119,0.06)', padding: '2rem', maxWidth: 350, minWidth: 260, flex: '1 1 300px', textAlign: 'left' }}>
            <strong>Is Anise open source?</strong>
            <p>Parts of Anise will be open source, and we encourage community contributions and transparency.</p>
          </div>
          <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(59,33,119,0.06)', padding: '2rem', maxWidth: 350, minWidth: 260, flex: '1 1 300px', textAlign: 'left' }}>
            <strong>How much does it cost?</strong>
            <p>It doesn’t cost a thing to download. You pay however much you want. This all benefits the users! There will be a small admin fee in places though.</p>
          </div>
          <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(59,33,119,0.06)', padding: '2rem', maxWidth: 350, minWidth: 260, flex: '1 1 300px', textAlign: 'left' }}>
            <strong>What are charity Anises?</strong>
            <p>Anise does not take profit from charity Anises, only fees to keep the app running. 100% of donations go to the intended causes, minus minimal admin costs.</p>
          </div>
        </div>
      </section>
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
                <Button type="submit" style={{ background: '#7c4dff', color: '#fff', fontWeight: 700, fontSize: '1.1rem', padding: '0.9rem 0' }}>Join Waitlist</Button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Home; 