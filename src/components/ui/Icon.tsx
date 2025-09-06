import React from "react";
import clsx from "clsx";
import { FaInstagram, FaFacebook, FaTiktok, FaWhatsapp } from "react-icons/fa";

interface Props {
  iconName: string;
  href: string;
  openInNewTab?: boolean;
  className?: string;
}

const iconMap = {
  instagram: FaInstagram,
  facebook: FaFacebook,
  tiktok: FaTiktok,
  whatsapp: FaWhatsapp,
};

export const IconLink: React.FC<Props> = ({
  iconName,
  href,
  openInNewTab = false,
  className = "",
}) => {
  const Icon = iconMap[iconName as keyof typeof iconMap];

  const linkStyles = clsx(
    "text-brand-orange",
    "hover:text-brand-white",
    "transition-colors",
    "duration-200",
    "inline-flex",
    "items-center",
    "justify-center",
    "w-10",
    "h-10",
    "rounded-full",
    "hover:bg-orange-400/10",
    className
  );

  if (!Icon) {
    console.warn(`Icon "${iconName}" not found in iconMap`);
    return null;
  }

  return (
    <a
      href={href}
      className={linkStyles}
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
    >
      <Icon size={20} />
    </a>
  );
};

export default IconLink;
