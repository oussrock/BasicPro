import React from 'react';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  isLight?: boolean;
  bgImage?: string;
  overlay?: string;
}

export function Section({ id, children, style = {}, className = "", isLight = false, bgImage, overlay }: SectionProps) {
  const baseStyle: React.CSSProperties = isLight
    ? {
        position: "relative",
        overflow: "hidden",
        backgroundImage: `linear-gradient(rgba(248,246,241,0.91), rgba(235,229,215,0.93)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {
        position: "relative",
        overflow: "hidden",
        backgroundImage: `${overlay}, url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      };

  return (
    <section id={id} className={className} style={{ ...baseStyle, ...style }}>
      {children}
    </section>
  );
}
