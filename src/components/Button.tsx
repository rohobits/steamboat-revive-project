// src/components/Button.tsx

import React from 'react';
import { Link } from 'react-router-dom';

export type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  variant?: ButtonVariant;
  external?: boolean;
  className?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'px-6 py-3 bg-white text-steamboat-blue font-semibold rounded-lg shadow hover:bg-steamboat-blue hover:text-white transition-colors duration-300',
  secondary: 'px-6 py-3 bg-steamboat-blue text-white font-semibold rounded shadow hover:bg-white hover:text-steamboat-blue transition-colors duration-300',
};

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  external = false,
  className = '',
}: ButtonProps) {
  const classes = `${variantClasses[variant]} ${className}`.trim();

  if (to) {
    return (
      <Link
        to={to}
        onClick={(e) => {
          if (onClick) onClick(e);
          window.scrollTo(0, 0);
        }}
        className={classes}
      >
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
