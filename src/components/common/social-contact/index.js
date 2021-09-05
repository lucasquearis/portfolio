import React from 'react';
import './social-contact.css';
import SocialData from '../../data/social';

const SocialContact = () => {
  const data = SocialData;
  return (
    <div className="social-contact">
      {data.map((social) => (
        <a
          rel="noreferrer"
          target="_blank"
          key={ social.id }
          href={ social.link }
        >
          <div
            className="social-icon-div"
          >
            <img
              src={ social.icon }
              alt={ social.platform }
              className="social-icon"
            />
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialContact;
