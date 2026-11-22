export const Icon = ({ name, size = 20, className = "", color = "currentColor" }) => {
  const props = {
    width: size,
    height: size,
    fill: "none",
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
  };

  switch (name) {
    case "Playwright":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="#2EAD33" strokeWidth="2" strokeLinejoin="round" />
          <path d="M12 6L7 9V15L12 18L17 15V9L12 6Z" fill="#2EAD33" fillOpacity="0.2" stroke="#45BA4B" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="2.5" fill="#E84393" />
        </svg>
      );

    case "Selenium":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#00B400" fillOpacity="0.15" stroke="#00B400" strokeWidth="2" />
          <text x="12" y="16" fontSize="11" fontWeight="bold" fill="#00B400" textAnchor="middle" fontFamily="sans-serif">Se</text>
        </svg>
      );

    case "Appium":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="12" cy="12" r="9" stroke="#662D91" strokeWidth="2" fill="#662D91" fillOpacity="0.15" />
          <path d="M8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16" stroke="#A775C7" strokeWidth="2" strokeLinecap="round" />
          <circle cx="12" cy="12" r="1.5" fill="#662D91" />
        </svg>
      );

    case "K6":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" stroke="#7D64FF" strokeWidth="2" fill="#7D64FF" fillOpacity="0.15" />
          <path d="M8 8V16M8 12L13 8M10.5 10.5L14 16" stroke="#9985FF" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case "Java":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M8 18C10.5 18.5 14 18.5 16.5 18M7 21C10 21.5 14.5 21.5 17.5 21" stroke="#F89820" strokeWidth="2" strokeLinecap="round" />
          <path d="M10 14C11.5 13.5 13 13.5 14.5 14C13.5 11 15 9.5 16 8C14 8.5 13 10 12.5 11C11.5 9.5 12 7.5 11 5C10 7 10 9 8.5 10.5C7.5 11.5 8 13 10 14Z" fill="#5382A1" fillOpacity="0.3" stroke="#5382A1" strokeWidth="1.5" />
        </svg>
      );

    case "JavaScript":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <rect x="2" y="2" width="20" height="20" rx="3" fill="#F7DF1E" />
          <path d="M12 18C12 16.5 13 15.5 14 15.5C15 15.5 16 16 16 17.5C16 19 14.5 20 12.5 19.5" stroke="#000" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M8 14V17.5C8 18.8 7.2 19.5 6 19.5" stroke="#000" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );

    case "TypeScript":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <rect x="2" y="2" width="20" height="20" rx="3" fill="#3178C6" />
          <path d="M5 8H11M8 8V18" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
          <path d="M13 17C14 17.8 15.5 18 17 17.5C18.5 17 18.5 15.5 17.5 15C16.5 14.5 14 14.2 14 12.5C14 11 15.5 10 17 10.2C18 10.4 18.8 11 19 11.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case "Python":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M11.5 2C8.5 2 8 3.5 8 5V7H12.5V8H6C4 8 2 9.5 2 12.5C2 15.5 3.5 16 5 16H6.5V14C6.5 12.5 7.5 11 9.5 11H14C15.5 11 17 9.8 17 8.2V5C17 3.5 15 2 11.5 2Z" fill="#3776AB" />
          <path d="M12.5 22C15.5 22 16 20.5 16 19V17H11.5V16H18C20 16 22 14.5 22 11.5C22 8.5 20.5 8 19 8H17.5V10C17.5 11.5 16.5 13 14.5 13H10C8.5 13 7 14.2 7 15.8V19C7 20.5 9 22 12.5 22Z" fill="#FFD43B" />
          <circle cx="10" cy="4.5" r="1" fill="#fff" />
          <circle cx="14" cy="19.5" r="1" fill="#000" />
        </svg>
      );

    case "Bash":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <rect x="2" y="3" width="20" height="18" rx="3" fill="#2E3440" stroke="#4C566A" strokeWidth="1.5" />
          <path d="M6 8L10 12L6 16" stroke="#88C0D0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 16H17" stroke="#A3BE8C" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case "Node":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <polygon points="12,2 21,7.2 21,16.8 12,22 3,16.8 3,7.2" stroke="#5FA04E" strokeWidth="2" fill="#5FA04E" fillOpacity="0.15" />
          <path d="M12 6L17 9V15L12 18L7 15V9L12 6Z" stroke="#83CD29" strokeWidth="1.5" />
        </svg>
      );

    case "React":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(30 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(90 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(150 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="2" fill="#61DAFB" />
        </svg>
      );

    case "Git":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M19 12L12 19L5 12L12 5L19 12Z" fill="#F05032" fillOpacity="0.15" stroke="#F05032" strokeWidth="2" />
          <circle cx="12" cy="9" r="1.5" fill="#F05032" />
          <circle cx="9" cy="15" r="1.5" fill="#F05032" />
          <path d="M12 10.5V13.5L9.5 14.5" stroke="#F05032" strokeWidth="1.5" />
        </svg>
      );

    case "Postman":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="12" cy="12" r="9" stroke="#FF6C37" strokeWidth="2" fill="#FF6C37" fillOpacity="0.15" />
          <path d="M7 12H17M13 8L17 12L13 16" stroke="#FF6C37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "Jira":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#0052CC" fillOpacity="0.15" stroke="#2684FF" strokeWidth="2" />
          <path d="M12 7L7 12L12 17L17 12L12 7Z" fill="#0052CC" stroke="#2684FF" strokeWidth="1.5" />
        </svg>
      );

    case "AWS":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M6 14C8.5 17 15.5 17 18 14" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" />
          <path d="M16.5 13L18.5 14.5L16.5 16" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M8 8L6 12H10L8 8Z" stroke="#232F3E" fill="#FF9900" strokeWidth="1" />
          <path d="M14 9C13 9 12 10 12 11.5C12 13 13 13.5 15 13.5" stroke="#f8fafc" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case "Docker":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M4 14C4 16.5 6 18.5 12 18.5C18 18.5 20 16.5 20.5 14C19 14 18 14.5 17 14.5C15 14.5 14 13 12 13C10 13 9 14.5 7 14.5C6 14.5 5 14 4 14Z" fill="#2496ED" fillOpacity="0.25" stroke="#2496ED" strokeWidth="1.8" />
          <rect x="7" y="10" width="2" height="2" fill="#2496ED" />
          <rect x="10" y="10" width="2" height="2" fill="#2496ED" />
          <rect x="13" y="10" width="2" height="2" fill="#2496ED" />
          <rect x="10" y="7" width="2" height="2" fill="#2496ED" />
        </svg>
      );

    case "MongoDB":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M12 2C12 2 6 7 6 13C6 17 8.5 20 11.5 21.8V22H12.5V21.8C15.5 20 18 17 18 13C18 7 12 2 12 2Z" fill="#47A248" fillOpacity="0.2" stroke="#47A248" strokeWidth="1.8" />
          <path d="M12 2V22" stroke="#47A248" strokeWidth="1.5" />
        </svg>
      );

    case "MySQL":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <rect x="3" y="4" width="18" height="16" rx="3" fill="#00758F" fillOpacity="0.15" stroke="#00758F" strokeWidth="2" />
          <text x="12" y="15" fontSize="8" fontWeight="bold" fill="#F29111" textAnchor="middle" fontFamily="sans-serif">SQL</text>
        </svg>
      );

    case "Linux":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <ellipse cx="12" cy="13" rx="6" ry="8" stroke="#FCC624" strokeWidth="2" fill="#FCC624" fillOpacity="0.15" />
          <circle cx="10" cy="10" r="1" fill="#fff" />
          <circle cx="14" cy="10" r="1" fill="#fff" />
          <path d="M10.5 13C11 13.5 13 13.5 13.5 13" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    // UI & Action Icons
    case "GitHub":
      return (
        <svg {...props} viewBox="0 0 24 24">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      );

    case "LinkedIn":
      return (
        <svg {...props} viewBox="0 0 24 24">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );

    case "Mail":
      return (
        <svg {...props} viewBox="0 0 24 24">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      );

    case "ExternalLink":
      return (
        <svg {...props} viewBox="0 0 24 24">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      );

    case "Terminal":
      return (
        <svg {...props} viewBox="0 0 24 24">
          <polyline points="4 17 10 11 4 5" />
          <line x1="12" y1="19" x2="20" y2="19" />
        </svg>
      );

    case "Code":
      return (
        <svg {...props} viewBox="0 0 24 24">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );

    case "Layers":
      return (
        <svg {...props} viewBox="0 0 24 24">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );

    case "ShieldCheck":
      return (
        <svg {...props} viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );

    case "Cpu":
      return (
        <svg {...props} viewBox="0 0 24 24">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <line x1="9" y1="1" x2="9" y2="4" />
          <line x1="15" y1="1" x2="15" y2="4" />
          <line x1="9" y1="20" x2="9" y2="23" />
          <line x1="15" y1="20" x2="15" y2="23" />
          <line x1="20" y1="9" x2="23" y2="9" />
          <line x1="20" y1="14" x2="23" y2="14" />
          <line x1="1" y1="9" x2="4" y2="9" />
          <line x1="1" y1="14" x2="4" y2="14" />
        </svg>
      );

    case "Check":
      return (
        <svg {...props} viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      );

    case "Copy":
      return (
        <svg {...props} viewBox="0 0 24 24">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      );

    case "ArrowRight":
      return (
        <svg {...props} viewBox="0 0 24 24">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      );

    case "ArrowUpRight":
      return (
        <svg {...props} viewBox="0 0 24 24">
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      );

    case "Download":
      return (
        <svg {...props} viewBox="0 0 24 24">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      );

    case "Briefcase":
      return (
        <svg {...props} viewBox="0 0 24 24">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      );

    case "Calendar":
      return (
        <svg {...props} viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      );

    case "MapPin":
      return (
        <svg {...props} viewBox="0 0 24 24">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );

    case "Menu":
      return (
        <svg {...props} viewBox="0 0 24 24">
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      );

    case "Close":
      return (
        <svg {...props} viewBox="0 0 24 24">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      );

    case "Sparkles":
      return (
        <svg {...props} viewBox="0 0 24 24">
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        </svg>
      );

    case "Activity":
      return (
        <svg {...props} viewBox="0 0 24 24">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      );

    default:
      return (
        <svg {...props} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
};
