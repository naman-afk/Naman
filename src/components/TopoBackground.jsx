export default function TopoBackground({ isAltitude }) {
  return (
    <div
      className={`fixed inset-0 pointer-events-none z-0 ${
        isAltitude ? "opacity-15" : "opacity-30"
      }`}
    >
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="topo"
            x="0"
            y="0"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="100" cy="100" r="20" fill="none" stroke="rgba(163,230,53,0.08)" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="40" fill="none" stroke="rgba(45,212,191,0.06)" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="rgba(163,230,53,0.05)" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(45,212,191,0.04)" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="95" fill="none" stroke="rgba(163,230,53,0.03)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#topo)" />
      </svg>
    </div>
  );
}
