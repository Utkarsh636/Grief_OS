import React from 'react';

interface PhoneShellProps {
  children: React.ReactNode;
  withNav?: boolean;
}

export function PhoneShell({ children, withNav = false }: PhoneShellProps) {
  return (
    <div className="w-full min-h-screen bg-[#EFEAE1] flex justify-center">
      <div className="w-full max-w-[430px] bg-canvas min-h-screen flex flex-col shadow-[0_0_80px_rgba(31,36,34,0.08)]">
        <div className={`flex-1 flex flex-col ${withNav ? 'pb-24' : ''}`}>{children}</div>
      </div>
    </div>);

}