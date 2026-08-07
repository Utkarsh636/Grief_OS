import React from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

const styles: Record<Variant, string> = {
  primary: 'bg-sage text-white hover:bg-sage-dark active:bg-sage-dark',
  secondary: 'bg-surface text-ink border border-line hover:bg-sage-soft',
  ghost: 'bg-transparent text-sage hover:bg-sage-soft',
  danger: 'bg-clay-soft text-clay border border-clay/20 hover:bg-clay/15'
};

export function Button({
  variant = 'primary',
  fullWidth = false,
  icon,
  className = '',
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={`inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl px-5 text-[15px] font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${
      styles[variant]} ${
      fullWidth ? 'w-full' : ''} ${className}`}>
      
      {icon}
      {children}
    </button>);

}