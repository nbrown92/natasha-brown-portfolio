type IconProps = {
  name: IconName;
  className?: string;
};

export type IconName =
  | "compass"
  | "target"
  | "users"
  | "layers"
  | "grid"
  | "search"
  | "cursor"
  | "chart"
  | "route"
  | "file"
  | "settings"
  | "chat"
  | "help"
  | "lightbulb"
  | "bridge";

const paths: Record<IconName, React.ReactNode> = {
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <polygon points="16.2 7.8 13.4 13.4 7.8 16.2 10.6 10.6 16.2 7.8" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M16 4.5a3 3 0 0 1 0 6" />
      <path d="M17 14.5c2.3.7 4 2.8 4 5.5" />
    </>
  ),
  layers: (
    <>
      <polygon points="12 3 21 8 12 13 3 8 12 3" />
      <polyline points="3 13 12 18 21 13" />
      <polyline points="3 17 12 22 21 17" />
    </>
  ),
  grid: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <line x1="16" y1="16" x2="21" y2="21" />
    </>
  ),
  cursor: (
    <>
      <path d="M5 3l6 18 2.5-7.5L21 11 5 3z" />
    </>
  ),
  chart: (
    <>
      <line x1="4" y1="20" x2="20" y2="20" />
      <rect x="6" y="11" width="3" height="6" rx="0.5" />
      <rect x="11" y="7" width="3" height="10" rx="0.5" />
      <rect x="16" y="13" width="3" height="4" rx="0.5" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="M8.5 6H15a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h6.5" />
    </>
  ),
  file: (
    <>
      <path d="M7 3h7l5 5v13H7z" />
      <polyline points="14 3 14 8 19 8" />
      <line x1="10" y1="13" x2="16" y2="13" />
      <line x1="10" y1="17" x2="16" y2="17" />
    </>
  ),
  settings: (
    <>
      <line x1="4" y1="8" x2="20" y2="8" />
      <line x1="4" y1="16" x2="20" y2="16" />
      <circle cx="9" cy="8" r="2.2" />
      <circle cx="15" cy="16" r="2.2" />
    </>
  ),
  chat: (
    <>
      <path d="M4 5h16v11H9l-4 4V16H4z" />
      <line x1="8" y1="9.5" x2="16" y2="9.5" />
      <line x1="8" y1="12.5" x2="13" y2="12.5" />
    </>
  ),
  help: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7" />
      <line x1="12" y1="16.5" x2="12" y2="16.6" />
    </>
  ),
  lightbulb: (
    <>
      <path d="M9 18h6" />
      <path d="M10 21h4" />
      <path d="M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.3 1 2.5h6c0-1.2.3-1.8 1-2.5A6 6 0 0 0 12 3z" />
    </>
  ),
  bridge: (
    <>
      <path d="M3 8c2.5 2 6 3 9 3s6.5-1 9-3" />
      <line x1="3" y1="8" x2="3" y2="18" />
      <line x1="21" y1="8" x2="21" y2="18" />
      <line x1="9" y1="11" x2="9" y2="18" />
      <line x1="15" y1="11" x2="15" y2="18" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </>
  ),
};

export function Icon({ name, className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
