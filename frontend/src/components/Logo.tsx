import React from 'react';
import logoImg from '../assets/logoblue.png';
import iconImg from '../assets/iconwhite.png';
import iconImgBlue from '../assets/iconblue.png';
import logoWhiteImg from '../assets/logowhite.png';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  variant?: 'default' | 'white' | 'icon' | 'icon-blue';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 48, variant = 'default' }) => {
  let logoSrc = logoImg;
  switch (variant) {
    case 'white':
      logoSrc = logoWhiteImg;
      break;
    case 'icon':
      logoSrc = iconImg;
      break;
    case 'icon-blue':
      logoSrc = iconImgBlue;
      break;
    default:
      logoSrc = logoImg;
      break;
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src={logoSrc} 
        alt="Stepup Academy" 
        style={{ height: size, width: 'auto' }}
        className="object-contain"
      />
    </div>
  );
};
