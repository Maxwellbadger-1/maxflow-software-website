"use client";

type MockupType = "website" | "mobile" | "dashboard" | "ecommerce";

interface ProjectMockupProps {
  type?: MockupType;
  primaryColor?: string;
  secondaryColor?: string;
}

export function ProjectMockup({
  type = "website",
  primaryColor = "#6366f1",
  secondaryColor = "#8b5cf6",
}: ProjectMockupProps) {
  if (type === "website") {
    return (
      <svg
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Browser Window */}
        <rect
          x="20"
          y="40"
          width="760"
          height="520"
          rx="12"
          fill="white"
          stroke="#E5E7EB"
          strokeWidth="2"
        />

        {/* Browser Top Bar */}
        <rect x="20" y="40" width="760" height="40" rx="12" fill="#F3F4F6" />
        <rect x="20" y="68" width="760" height="12" fill="#F3F4F6" />

        {/* Browser Dots */}
        <circle cx="45" cy="60" r="6" fill="#EF4444" />
        <circle cx="70" cy="60" r="6" fill="#F59E0B" />
        <circle cx="95" cy="60" r="6" fill="#10B981" />

        {/* URL Bar */}
        <rect x="140" y="50" width="480" height="20" rx="10" fill="white" />

        {/* Content - Hero */}
        <rect x="60" y="120" width="680" height="140" rx="8" fill={`${primaryColor}15`} />
        <rect x="80" y="140" width="200" height="20" rx="4" fill={primaryColor} />
        <rect x="80" y="170" width="320" height="12" rx="4" fill={`${primaryColor}40`} />
        <rect x="80" y="190" width="280" height="12" rx="4" fill={`${primaryColor}40`} />
        <rect x="80" y="220" width="120" height="30" rx="6" fill={primaryColor} />

        {/* Content - Cards */}
        <rect x="60" y="280" width="200" height="140" rx="8" fill="#F9FAFB" />
        <rect x="80" y="300" width="160" height="60" rx="4" fill={`${secondaryColor}20`} />
        <rect x="80" y="370" width="160" height="8" rx="4" fill="#E5E7EB" />
        <rect x="80" y="385" width="120" height="8" rx="4" fill="#E5E7EB" />

        <rect x="290" y="280" width="200" height="140" rx="8" fill="#F9FAFB" />
        <rect x="310" y="300" width="160" height="60" rx="4" fill={`${secondaryColor}20`} />
        <rect x="310" y="370" width="160" height="8" rx="4" fill="#E5E7EB" />
        <rect x="310" y="385" width="120" height="8" rx="4" fill="#E5E7EB" />

        <rect x="520" y="280" width="200" height="140" rx="8" fill="#F9FAFB" />
        <rect x="540" y="300" width="160" height="60" rx="4" fill={`${secondaryColor}20`} />
        <rect x="540" y="370" width="160" height="8" rx="4" fill="#E5E7EB" />
        <rect x="540" y="385" width="120" height="8" rx="4" fill="#E5E7EB" />

        {/* Decorative Elements */}
        <circle cx="700" cy="180" r="40" fill={`${primaryColor}10`} opacity="0.5" />
        <circle cx="650" cy="220" r="30" fill={`${secondaryColor}10`} opacity="0.5" />
      </svg>
    );
  }

  if (type === "mobile") {
    return (
      <svg
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Mobile Device Frame */}
        <rect
          x="300"
          y="50"
          width="200"
          height="400"
          rx="20"
          fill="white"
          stroke="#E5E7EB"
          strokeWidth="3"
        />

        {/* Screen */}
        <rect x="312" y="70" width="176" height="360" rx="8" fill="#F9FAFB" />

        {/* Status Bar */}
        <rect x="320" y="80" width="160" height="12" rx="4" fill={primaryColor} opacity="0.2" />

        {/* Header */}
        <rect x="320" y="105" width="100" height="16" rx="4" fill={primaryColor} />

        {/* Content Cards */}
        <rect x="320" y="135" width="160" height="80" rx="8" fill={`${primaryColor}15`} />
        <circle cx="350" cy="165" r="15" fill={primaryColor} />
        <rect x="375" y="155" width="80" height="8" rx="4" fill={primaryColor} opacity="0.6" />
        <rect x="375" y="170" width="100" height="6" rx="3" fill="#9CA3AF" />

        <rect x="320" y="230" width="160" height="80" rx="8" fill={`${secondaryColor}15`} />
        <circle cx="350" cy="260" r="15" fill={secondaryColor} />
        <rect x="375" y="250" width="80" height="8" rx="4" fill={secondaryColor} opacity="0.6" />
        <rect x="375" y="265" width="100" height="6" rx="3" fill="#9CA3AF" />

        <rect x="320" y="325" width="160" height="80" rx="8" fill={`${primaryColor}15`} />
        <circle cx="350" cy="355" r="15" fill={primaryColor} />
        <rect x="375" y="345" width="80" height="8" rx="4" fill={primaryColor} opacity="0.6" />
        <rect x="375" y="360" width="100" height="6" rx="3" fill="#9CA3AF" />

        {/* Home Indicator */}
        <rect x="370" y="420" width="60" height="4" rx="2" fill="#9CA3AF" />

        {/* Floating Elements */}
        <circle cx="250" cy="150" r="50" fill={`${primaryColor}08`} />
        <circle cx="550" cy="250" r="60" fill={`${secondaryColor}08`} />
        <circle cx="220" cy="400" r="40" fill={`${primaryColor}08`} />
      </svg>
    );
  }

  if (type === "dashboard") {
    return (
      <svg
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Dashboard Container */}
        <rect
          x="40"
          y="60"
          width="720"
          height="480"
          rx="12"
          fill="white"
          stroke="#E5E7EB"
          strokeWidth="2"
        />

        {/* Sidebar */}
        <rect x="40" y="60" width="160" height="480" rx="12" fill={`${primaryColor}10`} />
        <rect x="60" y="90" width="120" height="30" rx="6" fill={primaryColor} />

        {/* Menu Items */}
        <rect x="60" y="140" width="120" height="24" rx="6" fill={`${primaryColor}20`} />
        <rect x="60" y="175" width="120" height="24" rx="6" fill={`${primaryColor}20`} />
        <rect x="60" y="210" width="120" height="24" rx="6" fill={`${primaryColor}20`} />
        <rect x="60" y="245" width="120" height="24" rx="6" fill={`${primaryColor}20`} />

        {/* Main Content Header */}
        <rect x="220" y="90" width="200" height="32" rx="6" fill={primaryColor} />
        <rect x="640" y="90" width="100" height="32" rx="6" fill={secondaryColor} />

        {/* Stats Cards */}
        <rect x="220" y="145" width="160" height="100" rx="8" fill={`${primaryColor}08`} />
        <rect x="240" y="165" width="120" height="12" rx="4" fill={primaryColor} opacity="0.4" />
        <rect x="240" y="195" width="80" height="24" rx="4" fill={primaryColor} />

        <rect x="400" y="145" width="160" height="100" rx="8" fill={`${secondaryColor}08`} />
        <rect x="420" y="165" width="120" height="12" rx="4" fill={secondaryColor} opacity="0.4" />
        <rect x="420" y="195" width="80" height="24" rx="4" fill={secondaryColor} />

        <rect x="580" y="145" width="160" height="100" rx="8" fill={`${primaryColor}08`} />
        <rect x="600" y="165" width="120" height="12" rx="4" fill={primaryColor} opacity="0.4" />
        <rect x="600" y="195" width="80" height="24" rx="4" fill={primaryColor} />

        {/* Chart */}
        <rect x="220" y="270" width="520" height="240" rx="8" fill="#F9FAFB" />
        <rect x="240" y="290" width="480" height="20" rx="4" fill={primaryColor} opacity="0.3" />

        {/* Chart Bars */}
        <rect x="260" y="400" width="40" height="80" rx="4" fill={primaryColor} opacity="0.7" />
        <rect x="320" y="350" width="40" height="130" rx="4" fill={secondaryColor} opacity="0.7" />
        <rect x="380" y="380" width="40" height="100" rx="4" fill={primaryColor} opacity="0.7" />
        <rect x="440" y="330" width="40" height="150" rx="4" fill={secondaryColor} opacity="0.7" />
        <rect x="500" y="360" width="40" height="120" rx="4" fill={primaryColor} opacity="0.7" />
        <rect x="560" y="390" width="40" height="90" rx="4" fill={secondaryColor} opacity="0.7" />
        <rect x="620" y="340" width="40" height="140" rx="4" fill={primaryColor} opacity="0.7" />
      </svg>
    );
  }

  // ecommerce
  return (
    <svg
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Browser Window */}
      <rect
        x="20"
        y="40"
        width="760"
        height="520"
        rx="12"
        fill="white"
        stroke="#E5E7EB"
        strokeWidth="2"
      />

      {/* Browser Top Bar */}
      <rect x="20" y="40" width="760" height="40" rx="12" fill="#F3F4F6" />
      <circle cx="45" cy="60" r="6" fill="#EF4444" />
      <circle cx="70" cy="60" r="6" fill="#F59E0B" />
      <circle cx="95" cy="60" r="6" fill="#10B981" />

      {/* Header */}
      <rect x="60" y="100" width="100" height="24" rx="4" fill={primaryColor} />
      <rect x="620" y="100" width="80" height="24" rx="12" fill={secondaryColor} />

      {/* Hero Product */}
      <rect x="80" y="150" width="280" height="280" rx="8" fill={`${primaryColor}10`} />
      <rect x="120" y="190" width="200" height="200" rx="8" fill={primaryColor} opacity="0.2" />

      {/* Product Info */}
      <rect x="400" y="160" width="300" height="30" rx="6" fill={primaryColor} />
      <rect x="400" y="210" width="250" height="12" rx="4" fill="#9CA3AF" />
      <rect x="400" y="232" width="280" height="12" rx="4" fill="#9CA3AF" />
      <rect x="400" y="254" width="200" height="12" rx="4" fill="#9CA3AF" />

      {/* Price */}
      <rect x="400" y="290" width="120" height="40" rx="6" fill={secondaryColor} />

      {/* Add to Cart Button */}
      <rect x="400" y="350" width="200" height="48" rx="8" fill={primaryColor} />

      {/* Product Grid */}
      <rect x="80" y="460" width="120" height="80" rx="6" fill="#F9FAFB" />
      <rect x="95" y="475" width="90" height="40" rx="4" fill={`${primaryColor}20`} />

      <rect x="230" y="460" width="120" height="80" rx="6" fill="#F9FAFB" />
      <rect x="245" y="475" width="90" height="40" rx="4" fill={`${secondaryColor}20`} />

      <rect x="380" y="460" width="120" height="80" rx="6" fill="#F9FAFB" />
      <rect x="395" y="475" width="90" height="40" rx="4" fill={`${primaryColor}20`} />

      <rect x="530" y="460" width="120" height="80" rx="6" fill="#F9FAFB" />
      <rect x="545" y="475" width="90" height="40" rx="4" fill={`${secondaryColor}20`} />
    </svg>
  );
}
