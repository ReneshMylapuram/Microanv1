import { useState } from 'react';
import Logo from '../components/Logo.jsx';
import { allocationData, credibilityMarkers, deployedCapital, formatCurrency, fundMetrics, interestRateLabel } from '../data/fundData.js';

const APPLY_URL = 'https://form.typeform.com/to/Pk4s5hJj';
const links = [['dashboard', 'Transparency'], ['mission', 'Mission'], ['process', 'Process'], ['impact', 'Impact'], ['contact', 'Contact']];

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [marqueePaused, setMarqueePaused] = useState(false);
  return (
    <header id="top" className="site-hero">
      <a href="#dashboard" className="skip-link">Skip to main content</a>
      <nav className="site-nav" aria-label="Main navigation" onKeyDown={(event) => {
        if (event.key === 'Escape') { setMenuOpen(false); event.currentTarget.querySelector('.menu-toggle').focus(); }
      }}>
        <div className="nav-inner">
          <Logo />
          <div className="desktop-links">{links.map(([id, label]) => <a className="nav-pill" href={`#${id}`} key={id}>{label}</a>)}</div>
          <div className="nav-actions">
            <a className="btn-primary" href={APPLY_URL} target="_blank" rel="noopener noreferrer">Apply <span aria-hidden="true">↗</span></a>
            <button type="button" className="menu-toggle" aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close' : 'Menu'}</button>
          </div>
        </div>
        <div id="mobile-menu" className="mobile-menu" hidden={!menuOpen}>
          {links.map(([id, label]) => <a className="nav-pill" href={`#${id}`} key={id} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </div>
      </nav>
      <div className="hero-content">
        <div className="hero-copy" data-reveal>
          <h1>Small loans.<br />Small businesses<br /><span className="outline-word">moving.</span></h1>
          <p className="hero-description">Microan provides low-interest {interestRateLabel} liquidity loans to small businesses.</p>
          <div className="hero-actions">
            <a className="btn-primary btn-large" href="#dashboard">See our impact <span aria-hidden="true">↗</span></a>
            <a className="btn-secondary btn-large" href={APPLY_URL} target="_blank" rel="noopener noreferrer">Apply</a>
          </div>
        </div>
        <div className="fund-window" data-reveal aria-label="Community fund overview">
          <div className="window-chrome"><span className="window-dots" aria-hidden="true"><i /><i /><i /></span><span>MICROAN / COMMUNITY FUND</span><span aria-hidden="true">↗</span></div>
          <div className="window-body">
            <div className="window-title"><span>Small fund. Real possibility.</span><span className="status-tag">Small-business focused</span></div>
            <div className="fund-total" aria-label="Current fund value"><strong>{formatCurrency(fundMetrics.communityFund)}</strong><p>Local capital. A shared way forward.</p></div>
            <div className="window-stats"><div><span>Loans issued</span><strong>{fundMetrics.loansIssued}<small> loans</small></strong></div><div><span>Simple interest</span><strong>{interestRateLabel}</strong></div></div>
            <div className="fund-allocation">
              <div><strong>Capital at work</strong><span>{fundMetrics.deployedPercent}% deployed</span></div>
              <div className="allocation-bar" aria-hidden="true">{allocationData.map(item => <span key={item.label} style={{ width: `${item.value}%`, backgroundColor: item.color }} />)}</div>
              <p>{formatCurrency(deployedCapital, 2)} currently outstanding</p>
            </div>
            <a className="window-link" href="#allocation">See where the money goes <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
      <div className="principles-strip" aria-label="Our principles">
        <div className="principles-track" style={{ animationPlayState: marqueePaused ? 'paused' : undefined }}>{[0, 1].map(copy => <div className="principles-copy" aria-hidden={copy === 1 ? true : undefined} key={copy}>{credibilityMarkers.map(marker => <span key={marker}><i aria-hidden="true">✳</i>{marker}</span>)}</div>)}</div>
        <button type="button" className="marquee-toggle" aria-label={marqueePaused ? 'Resume scrolling principles' : 'Pause scrolling principles'} onClick={() => setMarqueePaused(value => !value)}>{marqueePaused ? 'Play' : 'Pause'}</button>
      </div>
    </header>
  );
}
