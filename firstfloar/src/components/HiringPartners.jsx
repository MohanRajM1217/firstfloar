import React from 'react';
import '../App.css'
const partners = [
  'The Indian Express',
  'Infosys',
  'Wipro',
  'TCS',
  'Happy Credit',
  'DePaul University',
  'RanchPal',
  'Home Chef',
  'Drive Lah'
];

const HiringPartners = () => {
  return (
    <div className="hiring-partners">
      <h2 style={{ justifyContent:"center",display:"flex"}}>Hiring Partners</h2>
      <div className="partners-list">
        {partners.map(partner => (
          <div key={partner} className="partner">
            {partner}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HiringPartners;