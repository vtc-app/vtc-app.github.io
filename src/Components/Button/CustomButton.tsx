import { type ReactNode } from "react";
import Link from "next/link";

interface CustomButtonProps {
  children: ReactNode;
  onClick?: () => void;
  isWhite?: boolean;
  href?: string;
}

export function CustomButton({
  children,
  isWhite,
  onClick,
  href,
}: CustomButtonProps) {
  const differentClasses = isWhite
    ? "border-2 bg-white hover:bg-faint"
    : "text-white";

  const buttonClassName = `md:px-5 px-3 py-2 md:text-md rounded-md shadow-md font-semibold hover:cursor-pointer transition duration-300 w-fit ${differentClasses}`;
  const buttonStyle = isWhite
    ? { borderColor: "#054eb4", color: "#054eb4" }
    : { backgroundColor: "#054eb4" };

  return (
    <div className="pt-2">
      {href ? (
        <Link
          href={href}
          className={buttonClassName}
          style={buttonStyle}
          onClick={onClick}
        >
          {children}
        </Link>
      ) : (
        <button
          type="button"
          className={buttonClassName}
          style={buttonStyle}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </div>
  );
}
