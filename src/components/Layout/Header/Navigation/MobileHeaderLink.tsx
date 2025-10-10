import { useState } from "react";
import Link from "next/link";
import { HeaderItem } from "../../../../types/menu";

interface MobileHeaderLinkProps {
  item: HeaderItem;
  onLinkClick?: () => void;
}

const MobileHeaderLink: React.FC<MobileHeaderLinkProps> = ({ item, onLinkClick }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleToggle = (e: React.MouseEvent) => {
    if (item.submenu) {
      e.preventDefault();
      setSubmenuOpen(!submenuOpen);
    }
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    // Handle anchor links for same-page navigation
    if (item.href.startsWith("/#")) {
      e.preventDefault();
      const targetId = item.href.substring(2); // Remove "/#" prefix
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Close mobile menu first
        if (onLinkClick) {
          onLinkClick();
        }
        
        // Smooth scroll to the target section
        setTimeout(() => {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });
        }, 100); // Small delay to allow menu to close
      }
    } else {
      // For external links, just close the menu
      if (onLinkClick) {
        onLinkClick();
      }
    }
    
    if (item.submenu) {
      handleToggle(e);
    }
  };

  return (
    <div className="relative w-full">
      <Link
        href={item.href}
        onClick={handleLinkClick}
        className="flex items-center justify-between w-full py-3 text-white hover:text-[#13db7a] focus:outline-none transition-colors duration-200 text-lg font-medium border-b border-gray-700 last:border-b-0"
      >
        {item.label}
        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
            className={`transform transition-transform duration-200 ${
              submenuOpen ? 'rotate-180' : ''
            }`}
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m7 10l5 5l5-5"
            />
          </svg>
        )}
      </Link>
      {submenuOpen && item.submenu && (
        <div className="bg-[#232323] rounded-lg mt-2 overflow-hidden">
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              onClick={onLinkClick}
              className="block py-3 px-4 text-white hover:text-[#13db7a] hover:bg-[#2a2a2a] transition-colors duration-200"
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileHeaderLink;
