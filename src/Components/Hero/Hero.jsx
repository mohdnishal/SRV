import React from 'react';
import './Hero.css'
import selfAss from '../../assets/self-assessment.svg';
import review from '../../assets/Reviw.svg';
import approval from '../../assets/approval.svg';
import certification from '../../assets/certification.svg';
import health from '../../assets/health.svg';
import educational from '../../assets/educational.svg';
import hospital from '../../assets/hospitality.svg';
import establishment from '../../assets/establisment.svg';

const steps = [
  { step: '1', img: selfAss, label: 'Self Assessment' },
  { step: '2', img: review, label: 'Review' },
  { step: '3', img: approval, label: 'Approval' },
  { step: '4', img: certification, label: 'Certification' }
];

const stats = [
  { icon: health, label: 'Healthcare', count: '2,000+' },
  { icon: educational, label: 'Educational', count: '1,000+' },
  { icon: hospital, label: 'Hospitality', count: '5,000+' },
  { icon: establishment, label: 'Common Establishments', count: '4,000+' }
];

const Hero = () => (
  <>

    <div className="steps-container">
      <p className="steps-title" style={{ fontSize: '14px', marginBottom: '35px' }}>Certified in Four Steps</p>
      <div className="steps">
        {steps.map(({ step, img, label }) => (
          <div className="step" key={step}>
            <span className="step-number">{step}</span>
            <div className="step-icon-circle">
              <img src={img} alt={label} />
            </div>
            <p>{label}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="stats">
      {stats.map(({ icon, label, count }) => (
        <div className="stat" key={label}>
          <img src={icon} alt={label} /><br />
          {label}<br /><span>{count}</span>
        </div>
      ))}
    </div>
  </>
);

export default Hero;
