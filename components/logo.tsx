import Image from "next/image";

interface BadrukLogoProps {
  className?: string;
  size?: "small" | "default" | "large" | "xlarge";
}

const BadrukLogo = ({ className = "", size = "default" }: BadrukLogoProps) => {
  // Size variants for the image
  const sizeClasses = {
    small: "h-12",
    default: "h-20",
    large: "h-24",
    xlarge: "h-32",
  };

  return (
    <div className={`flex items-center ${className}`}>
      <div className="glass-logo rounded-2xl">
        <Image
          src="https://i.ibb.co/0jyPGqQF/Chat-GPT-Image-19-Mai-2025-03-43-25.png"
          alt="Badruk Group Logo"
          width={80}
          height={80}
          className={`${sizeClasses[size]} w-auto object-contain`}
          priority
        />
      </div>
    </div>
  );
};

export default BadrukLogo;
